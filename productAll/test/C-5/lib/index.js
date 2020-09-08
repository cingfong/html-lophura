$(document).ready(function(){
	var nowpadding = $(".one").css("padding-left").replace('px', '')*2;
	var page = 0;
	var headerH = $(".header").height();
	var imgW = $(".one").width()+nowpadding;
	$(".control").css("height", headerH);
	$(".leftButton").click(function(){
		if(page > 0){
			page -=1;
			animateImg();
			$(".rightButton").css("display","block")
			if(page == 0){
				$(".leftButton").css("display","none")
			};
		};
	});
	$(".rightButton").click(function(){
		var imglong = $(".life").length - 3;
		if(page < imglong){
			page +=1;
			animateImg();
			$(".leftButton").css("display","block");
			if(page == imglong){
				$(".rightButton").css("display","none")
			}
		}
	});
	function animateImg(){
		var moveImg = imgW * page;
		$(".header").animate({scrollLeft: moveImg},200);
	}
})