//載入時判斷高度與直橫式
$(document).ready(function(){
	var wHeight = $(window).height();
	var divUnit = $("#divDaddy").children(".image").length;
	var webHeight = wHeight*divUnit;
	var scrollTime = $(window).scrollTop();
	//設定網頁高度
	$(".space").css("height", webHeight);
	//判斷手機橫直式
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    	$(".imageBig").addClass("imgPhone");
	}else {
    	$(".content").css("display", "none");
	}
});

//滾動時圖片更動
$(window).scroll(function(i){
	var divUnit = $("#divDaddy").children(".image").length;
	// var topTime = $(window).scrollTop();
	var scrollTime = $(window).scrollTop();
	var wHeight = $(window).height();
	var page =  parseInt(scrollTime / wHeight);
	var nowPage = wHeight*page+100;
	var pastPage = wHeight*(page+1);
	var delNum = (divUnit-page)
	if (scrollTime > nowPage){
		var pagee = divUnit - page
		$("#divDaddy .image:eq("+delNum+")").css("display","none");
		for (var i = divUnit; i > pagee; i--) {
			$("#divDaddy .image:eq("+i+")").css("display","none");
			if(i<=1){$("#divDaddy .image:eq("+0+")").css("display","block");}
		}
	};
	if (scrollTime < pastPage && page<divUnit){
		$("#divDaddy .image:eq("+(delNum-1)+")").css("display","block");
	};
	///圖片不一致時的白色背景
	if (page >0){
		$(".oneSpace").css("display","none")
	};
	if (page <=0){
		$(".oneSpace").css("display","block")
	};
	if (page >17){
		$(".twoWhite").css("display","none");
		$(".contentTitle").css("display","none");
		$("#endMove").css("display","none");
	};


	//商品照片最後一個滑出動畫
	if (page >16){
		$("#endMove").addClass("productsMove")
	};
	if (page <=16){
		$("#endMove").removeClass("productsMove")
	};
	if (page <=16){
		$("#endMove").css("display","block")
	};
	if (page <=17){
		$(".twoWhite").css("display","block");
		$(".contentTitle").css("display","block");
	};
	//logo與第一個商品淡入淡出
	var logoTop = $(window).scrollTop()/20;
	var logoPass = 1-(logoTop*0.02);
	var appear = logoTop*0.03;
	$(".headerLogo").css('top', 33+logoTop+"vh");
	$(".headerLogo").css('opacity', logoPass);
	$(".mose").css('opacity', logoPass);
	$(".scroll").css('opacity', logoPass);
	$("#start").css('opacity', appear);
	//小的LOGO淡入淡出
	var smallLogo = $(window).scrollTop()-$(".opening").height();
	// console.log(smallLogo);
	$(".contentTitle").css('opacity', smallLogo*0.02);
	// //小的尾端LOGO淡入淡出
	// var smallLogoEn = $(window).scrollTop()-$(".opening").height();
	// console.log(smallLogo);
	// $(".contentTitle").css('opacity', smallLogo*0.02);
});
//每次載入時頁面回到最上方
$(window).on("load", function() {
	var scrollTime = $(window).scrollTop();
	if(scrollTime>0){
		$("html, body").animate({ scrollTop: 0 }, 100);
	}
});


// window.onload=function(){
// 	var loading = $(".loading")[0]
// 	loading.style.opacity = 0;
// }

$(window).on("load",function(){
	$(".loading").css("display","none")
});
//截流
// function debounce(fn, wait) {
//     var timeout = null;
//     return function() {
//         if(timeout !== null)
//             clearTimeout(timeout);
//         timeout = setTimeout(fn, wait);
//     }
// };
// 處理函式
// function handle() {
// 	var divUnit = $("#divDaddy").children(".image").length;
// 	// var topTime = $(window).scrollTop();
// 	var scrollTime = $(window).scrollTop();
// 	var wHeight = $(window).height();
// 	var page =  parseInt(scrollTime / wHeight);
// 	var nowPage = wHeight*page;
// 	var pastPage = wHeight*(page+1);
// 	var delNum = (divUnit-page);
// 	var webHeight = wHeight*divUnit;
// 	var nowPosition = Math.ceil(scrollTime / wHeight);
	
// 	if (nowPosition > 0){
// 		for (i=1 ; i<nowPosition ; i++){
// 			$("#divDaddy .image:eq("+(divUnit-nowPosition)+")").css("display","none");
// 			$("#divDaddy .image:eq("+((divUnit-1)-nowPosition)+")").css("display","block");
// 		}
// 	}
// };
// 滾動事件
// $(window)[0].addEventListener('scroll', debounce(handle, 10));