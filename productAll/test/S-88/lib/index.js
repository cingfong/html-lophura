$(".photoAll").scroll(function(){
	var photoTop = $(window).scrollTop();
	var scrollDown = 1-($(".photoAll").scrollTop()/500);
	$(".scroll").css("opacity",scrollDown);
});
$(document).ready(function(){
	var photoTop = $(".photoAll").scrollTop();
	if(photoTop>0){
		$(".scroll").css("opacity","0");
	};
});;
var moveTime = true;

$(document).ready(function(){
		var page = 0 ;

		var scrolltop = 25;

		var scrollbottom = -25;

	if($(window).width()<790){
	//滑鼠圖示動畫
		$(".body").scroll(function(){
			var photoTop = $(window).scrollTop();
			var scrollDown = 1-($(".body").scrollTop()/200);
			$(".scroll").css("opacity",scrollDown);
		});
	//計算商品與文字高度
		var contentHeight = $(".content").height();
		var photoHeight = $(window).height()-contentHeight;

		$(".photo").css("height",photoHeight);

		$(".photoAll").css("padding-top",contentHeight);
		
		var screenHiehgt = $(window).height()+50;

		$(".body").css("hiehgt",screenHiehgt);

			//滾動判斷
		$(".body").scroll(function(){
			scrollMove();
		});
	}else{
		$(".zoom").css("opacity","1");
		$(".photo").mousemove(function(e){
			var top = e.pageY+30; 
			var left = e.pageX+5; 
			$(".zoom").css("left",left);
			$(".zoom").css("top",top);
		});
	};






	//圖片滑動
	function scrollMove(){
		// var contentHeight = $(".content").height();
		// var photoHeight = $(window).height()-contentHeight;

		// var nowtop = photoHeight * page;

		var nowtop = $(".body").scrollTop();

		// var moveheightB = nowtop - photoHeight;

		if(nowtop > scrolltop && moveTime === true){

			$(".body").css("overflow-y","hidden");

			moveTime = false;

			page+=1;
			var moveheight = photoHeight * page;

			$('.body').animate({scrollTop : moveheight},600);

			scrollbottom = moveheight - 25;

			scrolltop = moveheight + 25;

			setTimeout('moveEnd()',600);
		}else if(nowtop < scrollbottom && moveTime === true){

			$(".body").css("overflow-y","hidden");

			// alert(moveheight);
			moveTime = false;

			page=page-1;
			var moveheight = photoHeight * page;
		
			$('.body').animate({scrollTop : moveheight},600);


			scrolltop = moveheight+25;

			scrollbottom = moveheight-25;

			setTimeout('moveEnd()',700);
		}
	}
});
	//判斷是否動畫中
function moveEnd(){
	moveTime = true ;
	$(".body").css("overflow-y","scroll");
};


