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
 
    
    
});