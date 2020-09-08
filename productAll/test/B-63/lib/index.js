$(document).ready(function(){
	var oneMove = $(".leftOne").width();
	var twoMove = $(".rightTop").height();
	var threeMove = $(".rightBottom").width();
	var pageL = 0;
	var pageRO = 2;
	var pageRT = 2;

	function leftMove(){
		if(pageL == 2){
			$(".leftOne").scrollLeft(0);
			pageL = 0;
			leftMove();
		}else{
			pageL +=1;
			var moveLong = pageL * oneMove
			$(".leftOne").animate({scrollLeft: moveLong},500);
		}
	};

	$(".rightTop").scrollTop(twoMove*2);
	function rightOMove(){
		if(pageRO == 0){
			$(".rightTop").scrollTop(twoMove*2);
			pageRO = 2;
			rightOMove();
		}else{
			pageRO -=1;
			var moveLong = pageRO * twoMove;
			$(".rightTop").animate({scrollTop: moveLong},500);
		}
	};
	
	$(".rightBottom").scrollLeft(threeMove*2);

	function rightTMove(){
		if(pageRT == 0){
			$(".rightBottom").scrollLeft(threeMove*2);
			pageRT = 2;
			rightTMove();
		}else{
			pageRT -=1;
			var moveLong = pageRT * threeMove;
			$(".rightBottom").animate({scrollLeft: moveLong},500);
		}
	};

	function move(){
		rightOMove();
		rightTMove();
		leftMove(); 
	};

	var myVar = setInterval(move, 3000);
});

