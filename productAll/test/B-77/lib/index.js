var nowwidth = $(".col-7").width();
var nowLeft = 0;
var aaa = true;

//判斷執行布林植
function dealay(){
	console.log("++");
	$(window).scrollTop(0);
	aaa = true;
};
window.onscroll = function(){ 
if(aaa){ scrollBottom();
        setTimeout(dealay,1000); 
        aaa = false;
 }};

 //判斷是否滾動到底部
 function scrollBottom(){
	var shutterWidth = $(this).scrollTop();
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
		move();
	}
}; 

//向左滑動
function move(){
	$(window).scrollTop(0);
	Nowrun();
	var runLeft = nowLeft * nowwidth;
	if (runLeft == 0){
		$(".oneAll").scrollLeft(0),
		console.log("asdasd"),
		move();
	}
	else{
	$(".oneAll").animate({scrollLeft: runLeft},1000);
	};
	hoverChange();
};

//判斷第幾個
function Nowrun(){
	nowLeft==4?(nowLeft=0):(nowLeft+=1);

};

//判斷中間為哪一個div
function hoverChange(){
	if (nowLeft==1){
		$(".col-7").removeClass("thisOne");
		$(".two").addClass("thisOne");
	}
	else if(nowLeft==2){
		$(".col-7").removeClass("thisOne");
		$(".three").addClass("thisOne");
	}
	else if(nowLeft==3){
		$(".col-7").removeClass("thisOne");
		$(".four").addClass("thisOne");
	}
	else if(nowLeft==4){
		$(".col-7").removeClass("thisOne");
		$(".one").addClass("thisOne");
	}
	else if(nowLeft==0){
		$(".col-7").removeClass("thisOne");
		$(".one").addClass("thisOne");
	};
};
//click執行
$(document).ready(function(){
	$(".thisOne").click(function(){
		// window.location.href='about.html';
		$(".leftBottom").animate({bottom: "-10%"},500),
		$(".rightBottom").animate({right: "-10%"},500),
		$(".rightTop").animate({top: "-10%"},500),
		$(".four").animate({opacity: "0"},500),
		$(".two").animate({opacity: "0"},500),
		$("#logoIcon").css("right", "10%"),
		goTo();
	})
});
function goTo(){
	setTimeout(function()
		{window.location.href='about.html';
		}, 1000)
	
};

