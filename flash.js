$(document).ready(function(){
  
if ($("#flip"))
  $('#flip').click(function() {
    var page1 = $('.page1');
    var page2 = $('.page2');

    var toHide = page1.is(':visible') ? page1 : page2;
    var toShow = page2.is(':visible') ? page1 : page2;
    
    toHide.removeClass('flip in').addClass('flip out').hide();
    toShow.removeClass('flip out').addClass('flip in').show();

    $('.page3').hide();
  });

  $('#flop').click(function() {
    var page1 = $('.page1');
    var page3 = $('.page3');
    $('.page2').hide();

    var toHide = page1.is(':visible') ? page1 : page3;
    var toShow = page3.is(':visible') ? page1 : page3;
    
    toHide.removeClass('flip in').addClass('flip out').hide();
    toShow.removeClass('flip out').addClass('flip in').show();
  });

/*$('#flip').click(flipBtn());

$('#flop').click(flopBtn());



  function flipBtn(){
  	var page1 = $('.page1');
    var page3 = $('.page3');

    var toHide = page1.is(':visible') ? page1 : page3;
    var toShow = page3.is(':visible') ? page1 : page3;
    
    toHide.removeClass('flip in').addClass('flip out').hide();
    toShow.removeClass('flip out').addClass('flip in').show();
  }


  function flopBtn(){
  	var page1 = $('.page1');
    var page2 = $('.page2');

    var toHide = page1.is(':visible') ? page1 : page2;
    var toShow = page2.is(':visible') ? page1 : page2;
    
    toHide.removeClass('flip in').addClass('flip out').hide();
    toShow.removeClass('flip out').addClass('flip in').show();
  }*/



  /*$('#flip').click(function(){
	$('#question').hide()
	$('#faux').hide()
	$('#vrai').fadeIn()
})

$('#flop').click(function(){
	$('#question').hide()
	$('#vrai').hide()
	$('#faux').fadeIn()
})*/

});