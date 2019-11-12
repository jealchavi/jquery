$(document).ready(function () {

    checkList();
    var input = $('#input');
    $('#btn-agregar').click(function () {
        $('ul').append('<li>' + '<a target=_blank href=' + input.val() + '>' + input.val() + '</a>' + '</li>');
        input.val('');
    });

    function checkList() {
        $('a').each(function (index) {
            var elemento = $(this);
            var enlace = elemento.attr('href');
            elemento.text(enlace);

            //attr tambien se usa para agregar un atributo
            elemento.attr('target','_blank');

            //para eliminarlo usamos removeAttr
        });
    }


    //Tenemos elmento prepend el cual introduce al principio del elemento
    // Metodo before anade antes 

});