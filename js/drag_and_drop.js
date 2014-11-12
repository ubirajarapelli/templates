$(function(){
    $('.drag').draggable({
        connectToSortable: '.drop-container',
        helper: 'clone'
    });

    $('.drop-container').sortable({
        placeholder: 'placeholder',
        activate: function(event, ui){
            $('.drop-container p').remove();
        }
    });

    $('.lixeira').droppable({
        hoverClass: 'lixeira-ativa',
        drop: function(event, ui) {
            $(ui.draggable).remove();
        }
    });

    $('.salvar').click(function(){
        var valores = new Array();
        
        $('.drop-container .drag').each(function(){
            valores.push( $(this).html() );
        });
        
        alert(valores);
    });
});