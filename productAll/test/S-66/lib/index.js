// $(document).ready(function(){
window.addEventListener("load",start,false);
function start(){ 
	setTimeout(function(){
		var imgBox = $(".voice_2")[0];
		imgBox.addEventListener('touchstart',touchDown,false);
		imgBox.addEventListener('touchmove',touchMove,false);
		imgBox.addEventListener('touchend',touchUp,false);
		var touchE,touchS,touchBoolean;
		function touchDown(e){
			touchS = e.targetTouches[0].clientX;
		};
		function touchMove(e){
			touchE = e.targetTouches[0].clientX+30;
			touchBoolean = true;
		};
		function touchUp(e){
			var towards

			if( touchE - touchS > 0 && touchBoolean){
				touchBoolean = false;
				towards = "L";
				pathMove(towards,valueNextNum);

			}else if( touchE - touchS < -30 && touchBoolean){
				touchBoolean = false;
				towards = "R";
				pathMove(towards,valueNextNum);

			};
		};
		var valueNextThis = $(".imgList")[1];
		var valueNextNum = valueNextThis.style.width.replace(/[^0-9]/ig,"");
		function pathMove(towards,valueNextNum){
			$(".imgList").each(function(){
				var Value = $(this).attr("style");
				var valueNum = Value.replace(/[^0-9]/ig,"");
				if (valueNum < valueNextNum){
					if(towards == "R"){
						$(this).next().trigger("click");
					}else{
						$(this).prev().trigger("click");
					}
				};
			});
		};
	},500)
};
// });