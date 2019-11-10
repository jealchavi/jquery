$(document).ready(function () {

    //Evento blur
    $('#nombre').blur(function () {
        console.log(this.value);

        if (this.value.trim() == '') {
            $('.aviso').css('display', 'block');
        }
        else {
            $('.aviso').css('display', 'none');
        }
    });

    //Evento focus
    $('#apellido').focus(function () {
        $(this).css('border', '2px solid green');
    });

});