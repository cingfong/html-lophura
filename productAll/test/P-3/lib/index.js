(function(){

	var imgH;
	var move = true;
	var page = 0;
	var imgL = $(".img").length;
	var doimgL = -(imgL - 1);

	$('body').on('mousewheel', function(event) {

		if(event.deltaY < 0 && page > doimgL){

			numPath = -1;

			imgH = $(".img").height();

			nowMove(numPath, imgH)

		}else if(event.deltaY > 0){

			numPath = 0;

			imgH = 0

			nowMove(numPath, imgH)
		}
	});

	function nowMove(numPath, imgH){

		if(move){

			move = false;

			page += numPath;

			$(".img").eq(page).animate({top : -imgH},600);

			window.setTimeout(moveOn,600);

			//返回上一張圖片page位置
			if(numPath == 0 && page < 0){

				page+=1;

			}

			function moveOn(){

				move = true;

			}
		};
	}


	//js 手機觸控判斷
	function start(){

		setTimeout(function(){

			var _body = $("body")[0];
			_body.addEventListener('touchstart',touchDown,false);
			_body.addEventListener('touchmove',touchMove,false);
			_body.addEventListener('touchend',touchUp,false);
			var touchS,touchE,touchBoolean;

			function touchDown(e){

				touchS = e.targetTouches[0].clientY;

			};
			function touchMove(e){

				touchE = e.targetTouches[0].clientY + 30;

				touchBoolean = true;

			};
			function touchUp(e){

				var towards

				if(touchE - touchS > 0 && touchBoolean ){

					numPath = 0;

					imgH = 0

					nowMove(numPath, imgH);

				}else if(touchE - touchS < -30&& touchBoolean && page > doimgL){

					numPath = -1;

					imgH = $(".img").height();

					nowMove(numPath, imgH);

				}
			}
		})
	};

	start();

})();