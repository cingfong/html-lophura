var aboutContent = false; 
// ----about click animate---
$(document).ready(function(){
	$(".about").stop().click(function(){
		if (!aboutContent){
			aboutContent = true;
			$(".aboutContent").stop().fadeIn();
			$(".aboutContent").stop().animate({opacity:"1"});
			$(".close").stop().css("opacity","1");
			$(".closeLeft").toggleClass("closeLeftEnd");
			$(".closeRight").toggleClass("closeRightEnd");
		}
	});
	$(".close").stop().click(function(){
		if(aboutContent){
			aboutContent =false ;
			$(".aboutContent").stop().animate({opacity:"0"});
			$(".close").stop().css("opacity","0");
			$(".closeLeft").removeClass("closeLeftEnd");
			$(".closeRight").removeClass("closeRightEnd");
			$(".aboutContent").delay(500).fadeOut();
		}
	})
})