
var RWDClickStart;
$(document).ready(function(){
	var photoHeight = -($(".photo").height());
	var page = 0;
	var photoLength = $(".photo").length-1;
	var moveRange
	//點擊照片下按鈕
	$(".moveBottom").click(function(){
		if(page < photoLength ){
			page+=1;
			moveRange = photoHeight * page;
			$(".photo").stop().animate({top: moveRange},700)
						.removeClass("postMove");
			$(".photo").eq(page-1)
						.stop().animate({top: moveRange},700)
						.addClass("postMove");
			$(".moveTop").css("display","block");
			if(page == photoLength){
				$(".moveBottom").css("display","none");
			};
		}
	});
	//點擊照片上按鈕
	$(".moveTop").click(function(){
		if(page > 0 ){
			page-=1;
			moveRange = photoHeight * page;
			$(".photo").stop().animate({top: moveRange},700)
						.removeClass("postMove");
			$(".photo").eq(page+1)
						.stop().animate({top: moveRange},900)
						.addClass("postMove");
			$(".moveBottom").css("display","block");
			if(page == 0){
				$(".moveTop").css("display","none");
			};
		}
	});
	//手機版面右方產品資訊
	RWDClickStart = false
	$(".RWDClick").click(function(){
		if(!RWDClickStart){
			$(".productsAll").animate({left: "-70%"},400);
			$(".contentAll").animate({left: "0px",paddingLeft: "20px"},400);
			$(".RWDClick").animate({opacity:"0"},400);
			setTimeout('RWDClickMove()',600);
		}
	});
	$(".contentAll,.productsAll").click(function(){
		if(RWDClickStart){
			$(".productsAll").animate({left: "0%"},400);
			$(".contentAll").animate({left: "-80px",paddingLeft: "120px"},400);
			$(".RWDClick").animate({opacity:"1"},600);
			RWDClickStart = false;
		}
	});

});
//滑動判斷
var tsY, tsX, tmY, tmX, teY, teX;
var photoStart = true;
$(document).bind('touchstart', function(e) {
    tsY = e.originalEvent.touches[0].clientY;
    tsX = e.originalEvent.touches[0].clientX+80;
});

$(document).bind('touchmove', function(e) {
    tmY = e.originalEvent.changedTouches[0].clientY;
    tmX = e.originalEvent.changedTouches[0].clientX;
});
$(document).bind('touchend', function(e){
    teY = e.originalEvent.changedTouches[0].clientY;
    teX = e.originalEvent.changedTouches[0].clientX;
    if((teY-tsY)>80){$(".moveTop").trigger("click")};
    if((teY-tsY)<-80){$(".moveBottom").trigger("click")};
})

function RWDClickMove(){
	RWDClickStart = true;
};

