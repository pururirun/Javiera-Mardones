$(document).ready(()=>{
  $('.project1, .project2, .project3, .project4').hide(); //inicializo oculto el contenedor

  //function que hace que al hacer click a una imagen (project1) muestre el contenido
    $('#project1').on('click', function(){
      $('.project1').show();
    });

  //function que hace que al hacer click a una imagen (project1) muestre el contenido
    $('#project2').on('click', function(){ // imagen a la que le hago el click
      $('.project2').show();
    });
});
