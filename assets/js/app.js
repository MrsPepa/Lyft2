$(document).ready(function(){
  $('.second').hide();
  $('#btn2').click(function(){
    $('.second').show();
    $('.first').hide();
  })

  $('.iconPrev').click(function(){
    $('.first').show();
    $('.second').hide();
  })
  /*habilitar boton*/
  $('#fono').keyup(function(){
    $('#next').addClass('btn-next');
  })
  /*
  })*/
})
