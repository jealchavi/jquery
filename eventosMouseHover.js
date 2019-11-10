$(document).ready(function(){


    //Evento mouseOver y mouseOut
    $('#caja').mouseover(function(){
        $(this).css({
            'background':'#fe4918',
            'color':'white',
            'transform':'rotate(2deg)'
        });
    });

    $('#caja').mouseout(function(){
        $(this).css({
            'background':'greenyellow',
            'color':'black',
            'transform':'rotate(0deg)'
        });
    });

    //Evento hover es mas efectivo
    $('#boton').hover(primero,segundo);


    function primero(){
        $(this).css({
            'background':'#fe4918',
            'color':'white',
            'transform':'rotate(20deg)'
        });
    }

    function segundo(){
        $(this).css({
            'background':'greenyellow',
            'color':'black',
            'transform':'rotate(0deg)'
        });
    }
    
    

});