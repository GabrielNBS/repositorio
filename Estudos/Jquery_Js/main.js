
$('form').on('submit', function(e) {
    e.preventDefault();

    const valTarefa = $('#addTask').val();
    const novaTarefa = $('<li class="task"></li>').text(valTarefa);
    
    $('#listaTarefas').append(novaTarefa);

    $('#addTask').val('');
})

$('form').on('reset', function () {
    $('#listaTarefas').empty();
})


$('#listaTarefas').on('click', 'li', function() {
    $(this).toggleClass('completada');
});

