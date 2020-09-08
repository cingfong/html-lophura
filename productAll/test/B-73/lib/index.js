$(document).ready(function(){
	var col4W = $(".col-3").width();
	$(".col-3").css("height",col4W);
	$(".col-3").hover(function(){
		$(this).find("img").stop().animate({ top: "-50%" });
	}, function(){
		$("img", this).stop().animate({ top: "50%" });
	});
	window.onload= function(){
		$(".col-3 img").css("height","90%");
	};
});