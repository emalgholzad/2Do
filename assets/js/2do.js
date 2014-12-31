$(document).ready(function () {
    $('body').hide().fadeIn(500);

    $('.toggle').on('click', function () {
        console.log('On/Off');
    });

    $('.remove').on('click', function () {
        console.log('Remove todo');
    });

    //Count items
    var todoTotal = $('#todo-list').children().length;
    $('#todo-total').html(todoTotal);

    var todoComplete = $('.todo input[checked]').length;
    $('#todo-complete').html(todoComplete);

});