function domDinamicForm(selector) {
    let dinamicForm = $(selector);

    let addDiv = $('<div>');
    let label = $('<label>');
    let input = $('<input>');
    let aButton = $('<a>').css('display', 'inline-block');

    dinamicForm.addClass('items-control');

    addDiv.addClass('add-controls');

    label.text('Enter text: ');

    aButton.text('Add');
    aButton.addClass('button');

    input.appendTo(label);
    aButton.appendTo(addDiv);
    label.appendTo(addDiv);

    addDiv.appendTo(dinamicForm);

    let resultDiv = $('<div>');
    let list = $('<ul>');

    resultDiv.addClass('result-controls');
    list.addClass('items-list');

    list.appendTo(resultDiv);
    resultDiv.appendTo(dinamicForm);

    aButton.on('click', function () {
        let textValue = input.val();
        let li = $('<li>');
        let a = $('<a>');
        a.text('X');

        li.addClass('list-item');
        a.addClass('button');

        a.click({li: li}, deleteItem);

        let strong = $('<strong>');
        strong.text(textValue);

        a.appendTo(li);
        strong.appendTo(li);
        li.appendTo(list);
    });

    function deleteItem(event) {
        event.data.li.remove();
    }

}

domDinamicForm('#content');

//$('body').on('click', '.button', onClicked);
//function onClicked() {
    //let li = $(this).parent('.items-list').find('li');
//    let inputAreaValue = $('input').val();

//    let li = $('<li>');
//    let a = $('<a>');
//    let strong = $('<strong>');

//    li.addClass('list-item');
//    a.addClass('button');

//    a.appendTo('li');
//    strong.appendTo('li');
//    //li.appendChild(a);
    //li.appendChild(strong);
//    li.appendTo('ul');

//    a.text('X');
//    strong.text(inputAreaValue)
//};

//$('body').on('click', '.list-item', function () {
//    $(this).remove();
//});
