$(document).ready(function(){ 
 
    // Efectos con show y hide
    var caja=$('#caja');
    $('#mostrar').click(function(){
        caja.show('fast');
        //caja.fadeIn('fast');
    });

    $('#ocultar').click(function() {
        caja.fadeOut('fast',function(){
            alert('Ocultado');
        });
        //caja.hide();
        //caja.fadeTo('slow',0.2);
    });
 

    //Podemos usar un solo boton como toggle
    $('#btn-toggle').click(function(){
        //$('#caja').toggle('fast');
        //$('#caja').fadeToggle('fast');
        $('#caja').slideToggle('normal');

    });


    //ANIMACIONES PERSONALIZADAS

    $('#animacion').click(function(){

        caja.animate({
            'margin-left':'200px'
        },'slow')
        .animate({
            borderRadius:'20px'
        },'fast');
    });


    //Callback en los efectos 

    





});