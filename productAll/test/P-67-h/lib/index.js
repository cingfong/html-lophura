var page = 0;
var moveTime = true;
$(document).ready(function(){
	var nowWidth = $(".col-6").width();
	var lt = -(nowWidth/2)-nowWidth;
	var photoNum = $(".col-6").length;

	$(".col-6").css("left", lt);

	$(".moveRight").click(function(){
		if(moveTime==true) {
			moveTime = false;
			page-=1;
			if(page == -(photoNum-4)){
				move(lt);
				setTimeout('rightEnd()',550);
				page = 0;
			}else{
				move(lt)
			};
		}
	});

	$(".moveLeft").click(function(){
		if(moveTime==true) {
			moveTime = false;
			page+=1;
			if (page == 1) {
				move(lt)
				setTimeout('leftEnd()',550);
				page = -(photoNum -5) ;
			}else{
				move(lt);
			};
		};
	});

});

function move(lt){
	var nowWidth = $(".col-6").width();
	var nowMove = nowWidth * page;
	var lt = lt + nowMove

	$(".col-6").animate({left: lt},500)

	setTimeout('moveEnd()',550);

};
function leftEnd(){
	var nowWidth = $(".col-6").width();
	var pageEnd = $(".col-6").length-3.5;
	var nowMove = nowWidth * pageEnd;

	$(".col-6").css("left", -nowMove);

	moveEnd();
};

function rightEnd(){
	var nowWidth = $(".col-6").width();
	var pageEnd = 1.5
	var nowMove = nowWidth * pageEnd;

	$(".col-6").css("left", -nowMove);

	moveEnd();
};

function moveEnd(){
	moveTime = true;
};
