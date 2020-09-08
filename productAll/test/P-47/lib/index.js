
$(document).ready(function(){
	var $windowHeight = $(window).height();
	var $windowTop;
	var $windowPosition;
	var $photo = [];
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	  	$(window).scroll(function(){
			$windowTop = $(window).scrollTop();
			$windowPosition = $windowTop + $windowHeight;
			for (var i = 0 ; i < $(".photo").length ; i++) {
			$photo[i] = $(".photo").eq(i).offset();
				if( $windowPosition > $photo[i].top){
					$(".photo").eq(i).addClass("scrollPhoto");
				}else{
					$(".photo").eq(i).removeClass("scrollPhoto"); ;
				}
			}
		});
	}
});


