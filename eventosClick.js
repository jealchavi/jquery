$(document).ready(function(){ 
 
    //Evento click
    $("#caja").click(function(){
        $(this).css({
            'background':'#333333',
            'width':'50%',
            'margin':'0 auto'
        })
    });

    //Evento docle click
    $("#caja").dblclick(function(){
        $(this).css({
            'background':'pink',
            'width':'50%',
            'margin':'0 auto'
        })
    });
});