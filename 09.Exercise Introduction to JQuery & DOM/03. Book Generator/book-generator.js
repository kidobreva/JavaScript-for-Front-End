function bookGenerator(selector) {
    let id = 1;

    let bookContainer = $(selector);
    let form = $('<div>');
    let pTitle = $('<p>');
    let pAuthor = $('<p>');
    let pIsbn = $('<p>');
    let selectButton = $('<button>');
    let deselectButton = $('<button>');

    form.attr('id', 'book' + id);
    id++;

    pTitle.text('Alice in Wonderland');
    pTitle.addClass('title');

    pAuthor.text('Lewis Carroll');
    pAuthor.addClass('author');

    pIsbn.text('1111');
    pIsbn.addClass('isbn');

    selectButton.text('Select');
    deselectButton.text('Deselect');

    pTitle.appendTo(form);
    pAuthor.appendTo(form);
    pIsbn.appendTo(form);
    selectButton.appendTo(form);
    deselectButton.appendTo(form);

    form.appendTo(bookContainer);

    selectButton.on('click', function () {
        form.css('border', 'solid blue 2px');
    });

    deselectButton.on('click', function () {
        form.css('border', 'none');
    });
}



bookGenerator('#wrapper');