let continents = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};

let continentsForHTML = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};



//PROBLEM 1
function renderAllContinents(continents) {
    for (let key in continents) {
        //console.log(key);
        let continent = continents[key];
        console.log(continent['name']);
    }
}

function renderSingleContinent(continent) {
    console.log(continent['name']);
    console.log('Countries:');

    let countries = continent['countries']

    for (let key in countries) {
        let country = countries[key];
        console.log('$$$' + country['name']);
    }
}

function renderSingleCountry(country) {
    console.log(country['name']);
    console.log('Capital: ' + country['capital']);
    console.log('Official Language: ' + country['officialLanguage']);
    console.log('Population: ' + country['population']);
    console.log('Area: ' + country['area'] + ' km2');
    console.log('Political Status: ' + country['politicalStatus']);
    if (country['politicalStatus'] === 'Republic') {
        console.log('President: ' + country['president']);
    } else {
        console.log('Monarch: ' + country['monarch']);
    }
    console.log('Official Currency: ' + country['officialCurrency']);
}


//PROBLEM 2

//RENDER CONTINENT
function renderAllContinentsInHTML(continents) {
    for (let key in continents) {
        let continent = continents[key];

        let continentDiv = $('<div class="continent">')
            .append('<h5 class="continent-title">' + continent['name'] + '</h5>');

        $('.continents').append(continentDiv);

        //renderSingleContinentInHTML(continent);
    }

    attachContinentsEvents(continents);
}

function renderSingleContinentInHTML(continent) {
    let countriesDiv = $('<div class="countries">');

    let dropdownSelect = $('<select class="dropdown-select">')
        .append('<option disabled selected value> -- select an option -- </option>');

    let countries = continent['countries'];

    for (let key in countries) {
        let country = countries[key];

        dropdownSelect
            .append('<option value="' + country['name'] + '">' + country['name'] + '</option>');

        //renderSingleCountryInHTML(country);
    }

    countriesDiv.append(dropdownSelect);

    //RENDER IMAGE
    let continentImageDiv = $('<div class="continent-image">')
        .append('<img src="images/' + continent['name'].toLowerCase() + '.png">');

    $('.continent-data')
        .append('<h2 class="continent-title">' + continent['name'] + '</h2>')
        .append('<h3 class="countries-title">Countries</h3>')
        .append(countriesDiv)
        .append(continentImageDiv);
}

function renderSingleCountryInHTML(country) {
    let countryTitleDiv = $('<div class="country-title">')
        .append('<h2>' + country['name'] + '</h2>');

    let countryDataDiv = $('<div class="country-data">')
        .append('<div class="country-capital"><strong>Capital:</strong><div>' + country['capital'] + '</div></div>')
        .append('<div class="country-official-language"><strong>Official Language:</strong><div>' + country['oficialLanguage'] + '</div></div>')
        .append('<div class="country-population"><strong>Population:</strong><div>' + country['population'] + '</div></div>')
        .append('<div class="country-area"><strong>Area:</strong><div>' + country['area'] + ' km<sup>2</sup></div></div>')
        .append('<div class="country-political-status"><strong>Political Status:</strong><div>' + country['politicalStatus'] + '</div></div>');

    if (country['politicalStatus'] === 'Republic') {
        countryDataDiv
            .append('<div class="country-president"><strong>President:</strong><div>' + country['president'] + '</div></div>');
    } else {
        countryDataDiv
            .append('<div class="country-monarch"><strong>Monarch:</strong><div>' + country['monarch'] + '</div></div>');
    }

    countryDataDiv
        .append('<div class="country-official-currency"><strong>Official Currency:</strong><div>' + country['officialCurrency'] + '</div></div>');

    $('.continent-country')
        .append(countryTitleDiv)
        .append(countryDataDiv);
}

function renderDataInHTML(continents) {
    renderAllContinentsInHTML(continents);
}


//PROBLEM 3
function showData() {
    $('.continent-data').show();
    $('.continent-country').show();
}

function hideData() {
    $('.continent-data').hide();
    $('.continent-country').hide();
}

function clearData() {
    $('.continent-data').empty();
    $('.continent-country').empty();
}

function clearCountryData() {
    $('.continent-country').empty();
}

function attachContinentsEvents(continents) {
    $('.continent').click(function (e) {
        e.preventDefault();

        if($(this).hasClass('shown')) {
            $(this).removeClass('shown');
            hideData();
            clearData();
        } else {
            clearData();

            $(this).parent().find('.shown').removeClass('shown');
            $(this).addClass('shown');

            let continentName = $(this).find('.continent-title').text();

            renderSingleContinentInHTML(continents[continentName]);

            attachCountryEvents(continents[continentName]);
            showData();
        }
    });
}

function attachCountryEvents(continent) {
    $('.dropdown-select').change(function (e) {
        e.preventDefault();

        let countryName = $(this).val();

        clearCountryData();

        renderSingleCountryInHTML(continent['countries'][countryName]);
    });
}

function attachEvents(continents) {
    attachContinentsEvents(continents);

}


//PROBLEM 4

function getAllContinents() {
    let requestURL = 'https://continental-drift.firebaseio.com/continents.json';

    $.get(requestURL)
        .then(renderAllContinentsInHTML)
        .catch((err) => console.log(err));
}

//renderAllContinents(continents);
//renderSingleContinent(continents['Europe']);
//renderSingleCountry(continents['Europe']['countries']['Bulgaria']);

//renderDataInHTML(continentsForHTML);

//renderAllContinentsInHTML(continents);

//attachEvents(continents);

getAllContinents();

