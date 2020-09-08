(function () {
	var clickboolean = true;
	$(document).click(function (e) {
		if(!menuOn){
			clickboolean = false;

			var screenWidth = $(document).width();

			var screenHalf = screenWidth / 2;

			var x = e.pageX;

			var y = e.pageY;


			if (x < screenHalf) {

				// var e = jQuery.Event("keydown");
				// e.keyCode = 37;
				// $(window).trigger(e);
				$('#magazine').turn('previous');
			}else{

				// var e = jQuery.Event("keydown");
				// e.keyCode = 39;
				// $(window).trigger(e);
				$('#magazine').turn('next');

			};
		}

	});

	// js 手機觸控判斷
	function start(){

		setTimeout(function(){

			var _body = $("#magazine")[0];
			_body.addEventListener('touchstart',touchDown,false);
			_body.addEventListener('touchmove',touchMove,false);
			_body.addEventListener('touchend',touchUp,false);
			var touchSX,touchEX,touchSY,touchEY,touchBoolean;

			function touchDown(e){

				touchSX = e.targetTouches[0].clientX;
				touchSY = e.targetTouches[0].clientY;

			};
			function touchMove(e){

				touchEX = e.targetTouches[0].clientX + 30;
				touchEY = e.targetTouches[0].clientY + 30;

				touchBoolean = true;

			};
			function touchUp(e){

				if(touchEX - touchSX > 30 && touchBoolean){

					touchBoolean = false;

					$('#magazine').turn('previous');

				}else if(touchEX - touchSX < -30 && touchBoolean){

					touchBoolean = false;

					$('#magazine').turn('next');

				}else if(!touchBoolean && clickboolean){

					var screenWidth = $(document).width();

					var screenHalf = screenWidth / 2;

					if(touchSX > screenHalf){

						$('#magazine').turn('next');

					}else{

						$('#magazine').turn('previous');

					}

				}
			}
		})
	};

	start();
})();


// https:/github.com/easyliveTaichung/book/invitations