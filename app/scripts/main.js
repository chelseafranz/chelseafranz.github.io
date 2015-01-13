
// down arrow animation
// $('.down').mouseenter(function  () {
// 	$('.down').addClass('animated bounce');
// });
// $('.down').mouseleave(function  () {
// 	$('.down').removeClass('animated bounce');
// });

// 


$(document).ready(function(){
  $('.js-menu-trigger,.js-menu-screen').on('click touchstart',function (e) {
    $('.js-menu,.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});




$('.wandrlst').on('click', function(){
	$('.description').html("wandrlst:");
});
$('.codeRockstar').on('click', function(){
	$('.description').html("Code Rockstar:");
});
$('.nimbus').on('click', function(){
	$('.description').html("Curious Nimbus:");
});
$('.portfolio').on('click', function(){
	$('.description').html("Portfolio:");
});


