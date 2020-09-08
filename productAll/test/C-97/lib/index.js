$('.carousel').carousel({
  interval: false 
});
$('.carousel').on('slide.bs.carousel', function () {
	$(".text").css("display","none");
});
$('.carousel').on('slid.bs.carousel', function () {
	$(".active .text").css("display","block");
});
$('.backTop img').click(function(){
	// $(window).scrollTop(0);
	$('html,body').animate({scrollTop:'0px'},500)
});

$(window).on("load",function(){
	$(".loading").css("display","none")
});