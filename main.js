$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefaNova = $('#nova-tarefa').val()
        const novoItem = $('<li></li>');
        $(`<a "${tarefaNova}" /a>`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a>
                    <input type="checkbox" id="botao-tarefa"></input>  ${tarefaNova}
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })
})    

