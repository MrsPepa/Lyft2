$(document).ready(function() {
  setTimeout(function() {
    $(".logo").fadeOut(1500);
  },3000);
  $('.first').hide();
});
$(document).ready(function() {
  setTimeout(function() {
    $(".first").fadeIn(1500);
  },3000);
});

$(document).ready(function(){
  $('.second').hide();
  $('.third').hide();
  $('#btn2').click(function(){
    $('.second').show();
    $('.first').hide();
    
  })

})
/* seleccion hacia atras*/
$('.iconPrev').click(function(){
  $('.first').show();
  $('.second').hide();
  $('.third').hide();
  })
$('.iconPrev1').click(function(){
  $('.first').hide();
  $('.second').show();
  $('.third').hide();
})

/*habilitar boton*/
$('#fono').keyup(function(){
  if($(this).val().length < 10){
    $('#next').attr('class','disabled');
    $('#next').attr('disabled','disabled');
  } else {
    $('#next').removeAttr('class','disabled');
    $('#next').removeAttr('disabled','false');
    $('#next').attr('id','btn-next');
  }
  /*comprobar que sólo se ingresen numeros*/
  if(isNaN($('#fono').val())){
    alert('Favor ingresar sólo números');
    $('#next').attr('class','disabled');
    return false;
  }

  return false;
})
$('#fono').keyup(function(){
  if($(this).val().length===10){
    var code = '';
    var num = '123456789';
    for(var i = 0; i < 3; i++){
    code+=num.charAt(Math.floor(Math.random()*num.length));
    }
    alert('Tu código LAB: '+code);
  }
})
/* ingresar codigo */
$('#next').click(function(){
  $('.first').hide();
  $('.second').hide();
  $('.third').show();
})