$(document).ready(function(){ 
 
    $('#boton').mousedown(function(){
        $(this).css('font-size','3rem');
    });

    $('#boton').mouseup(function(){
        $(this).css('font-size','1rem');
    });


    //mouseMove persigue el raton
    $(document).mousemove(function(e){
        console.log(e.clientX+' '+e.clientY);
        var top=e.clientY, left=e.clientX;
        $('.contenedor').css({
            'left':left,
            'top':top
        });
        
    });
    
});