let location = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};
renderData(location);

function renderData(location) {
    console.log('Location: ' + location['name']);
    console.log('Longitude: ' + location['longitude'] + ' ' + 'Latitude ' + location['latitude']);
    console.log('Pokemons:');

    let pokemons = location['pokemons'];
    if(pokemons) {
        for (let index in pokemons) {
            let pokemon = pokemons[index];

            console.log('###Name: ' + pokemon['name']);
            console.log('###Power: ' + pokemon['power'] + 'pp');
            console.log('###Evolved From: ' + pokemon['evolvedFrom']);
            console.log('###Evolves To: ' + pokemon['evolvesTo']);
        }
    }
}

