$(document).ready(function () {
	$('.centerPhoto').delegate('.smallImg','click',function () {
		var clickNum = $('.smallImg').index(this)
		var bigImgH = $('.centerPhoto').height() / 8
		var moveLong = clickNum * bigImgH
		 $('html,body').stop().animate({ scrollTop: moveLong }, 'slow');
	})
	var nowImgNum = 0
	$('.leftIcon').click(function () {
		if(nowImgNum > 0){
			nowImgNum -= 1
			imgMove(nowImgNum)
		}
	})
	$('.rightIcon').click(function () {
		var photoDomLong = $('.bigImg').length
		var photoWidth = $('.bigImg').outerWidth()
		var htmlWidth = $('html').outerWidth()
		var htmlWatchNum =  Math.floor(htmlWidth/photoWidth)
		var photoRangeLong = photoDomLong - htmlWatchNum
		if(nowImgNum < photoRangeLong){
			nowImgNum += 1
			imgMove(nowImgNum)
		}
	})
	function imgMove (nowImgNum) {
		var photoWidth = $('.bigImg').outerWidth()
		var photomove =  nowImgNum * photoWidth
		$('.bigImg').stop().animate({ left: -photomove }, 'slow');

	}
})