$(document).ready(function(){ 
 
    var caja=$('.datos');

    // metodo load sirve para meter dentro de un div el ocntenido de una web
    //caja.load('https://reqres.in/');

    /*Metodo get y post */


    //Metodo get puede recibir algunos parametros
    $.get('https://reqres.in/api/users?page=2',{page:3}, function(response){
        console.log(response.data);

        response.data.forEach((element,index) => {
            caja.append('<p>'+element.first_name+'</p>');
            
        });
        
    });

    

    //Creamos mediante el formulario un evento de tipo submit
    /* $('#registro-frm').submit(function(e){

        e.preventDefault();
        //metodo post en jquery recibe 3 parametros: url, objeto, funcion anonima 
        var usuario={
            nombre: $("input[name='nombre']").val(),
            web:    $("input[name='web']").val()
        }

        console.log(usuario);
        
        //Crearemos un usuario usando el metodo post
        $.post($(this).attr('action'),usuario,function(response){
            console.log(response);
            
        }).done(function(){
            alert('usuario correcto');
        });

        return false;
    }); */


    //Hacer una peticion ajax usando el metodo ajax. es el mejor de todos
    $('#registro-frm').submit(function(e){

        e.preventDefault();

        var usuario={
            nombre: $("input[name='nombre']").val(),
            web:    $("input[name='web']").val()
        }


        $.ajax({
            //type indica el metodo
            type:'post',
            //url adonde enviaremos los datos
            url: $(this).attr('action'),
            //data hace alusion al objeto que se va a enviar
            data: usuario,
            //mediante beforeSend se le puede indicar lo que puede hacer mientras se envia
            beforeSend: function(){
                console.log('Enviando usuario');
            },
            //mediante success le podemos indicar lo que hara en caso de enviar los datos
            success:function(){
                console.log(usuario);
            },
            error:function(){
                console.log('error al enviar datos');
            }
        });

        return false;
    });
  
});
