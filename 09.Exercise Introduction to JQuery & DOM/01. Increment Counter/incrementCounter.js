function generateForm(selector) {
    let container = $(selector);

    let form = $('<div>');
    let textArea = $('<textarea>');
    let incrementButton = $('<button>');
    let addButton = $('<button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    incrementButton.text('Increment');
    incrementButton.addClass('btn');
    incrementButton.attr('id', 'incrementBtn');

    addButton.text('Add');
    addButton.addClass('btn');
    addButton.attr('id', 'addBtn');

    list.addClass('results');

    textArea.appendTo(form);
    incrementButton.appendTo(form);
    addButton.appendTo(form);
    list.appendTo(form);

    form.appendTo(container);
}

$('body').on('click', '#incrementBtn', function () {
    let textAreaValue = parseInt($('textArea').val());
    $('textArea').val(textAreaValue + 1);
});

$('body').on('click', '#addBtn', function () {
    let textAreaValue = parseInt($('textArea').val());

    let li = $('<li>');
    li.text(textAreaValue);
    li.appendTo('ul');
});

generateForm('#wrapper');