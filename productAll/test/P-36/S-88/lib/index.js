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
var scrollDown;
$(document).ready(function(){

		var page = 0 ;

		var scrolltop = 25;

		var scrollbottom = -25;

	if($(window).width()<790){
		//滑鼠圖示動畫
		$(".body").scroll(function(){
			var photoTop = $(window).scrollTop();
			// var scrollDown = 1-($(".body").scrollTop()/200);
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
		var bodyDiv = $(".body")[0];
		// bodyDiv.addEventListener('scroll', debounce(scrollMove, 10));
		bodyDiv.addEventListener('scroll', throttle(scrollMove, 500));
		// $(".body").scroll(function(){
		// 	scrollMove();
		// });
	};

		//圖片滑動
	function scrollMove(){
		scrollDown = 1-($(".body").scrollTop()/200);
		var nowtop = $(".body").scrollTop();
		var pageLength = $(".photo").length;
		// var moveheightB = nowtop - photoHeight;

		if(nowtop > scrolltop && moveTime === true && page < pageLength){

			moveTime = false;

			// $(".body").css("overflow-y","hidden");

			page+=1;
			var moveheight = photoHeight * page;

			$('.body').animate({scrollTop : moveheight},600);

			scrollbottom = moveheight - 25;

			scrolltop = moveheight + 25;

			setTimeout('moveEnd()',700);
		}else if(nowtop < scrollbottom && moveTime === true && page > 0){

			moveTime = false;

			// $(".body").css("overflow-y","hidden");

			page=page-1;
			var moveheight = photoHeight * page;
		
			$('.body').animate({scrollTop : moveheight},600);


			scrolltop = moveheight+25;

			scrollbottom = moveheight-25;

			setTimeout('moveEnd()',700);
		}
	}
});

function moveEnd(){
	moveTime = true ;
	$(".body").css("overflow-y","scroll");
};


function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null ) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
};

var throttle = function(func, delay) {
	var timer = null;
	return function() {
	    var context = this;
	    var args = arguments;
	    if (!timer) {
	        timer = setTimeout(function() {
	            func.apply(context, args);
	            timer = null;
	        }, delay);
	    }
	}
};