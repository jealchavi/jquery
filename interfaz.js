
$(document).ready(function(){ 
 
 //Mover elementos en la pagina CON DRAGGABLE
 $('.elemento').draggable();
 
 //Agrandar o reducir CON RESIZABLE
 $('.elemento').resizable();

 // SELECTABLE y cambiar propiedades
 //$('ul').selectable();

 //SORTABLE permite ordenar los elementos y con una funcion podemos actualizar propiedades
 $('ul').sortable({
     update:function (e,ui) {
         console.log('La lista ha cambiado');
         
     }
 });

 //DROPPABLE
 $('.elemento-movido').draggable();
 
 $('.area').droppable({
     drop:function(){
         alert('movido');
     }
 });


 //EFECTOS UI JQUERY

    $('#mostrar').click(function(){
        // Animacion: fade, blind, explode, slide, drop, fold, puff, scale, shake
        //opciones: slow, fast
        $('.caja-efectos').toggle('scale');
    })













});