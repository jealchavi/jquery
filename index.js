$(document).ready(function()
{
    //Selectores de atributos
    $('[href*="google"]').css({
        'text-decoration':'none',
        'color':'#fe4918'
    });


    //Find y parent en jquery

    console.log($('ul').parent().find('.elemento2').addClass('resaltado'));

    $('.elemento2').parent().parent().parent().css('background-color','red');

    
});