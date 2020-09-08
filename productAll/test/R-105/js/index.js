$(document).ready(function () {
	var photoNum
	$('.title_li p').hover(function () {
		photoNum = $(this).parent().index()
		hoverMove (photoNum)
	})
	function hoverMove (photoNum) {
		$('.photo').each(function () {
			$(this).removeClass('active')
		})
		$('.photo').eq(photoNum).addClass('active')

	}
	function titleH () {
		var leftC = $('.left_img').height()
		var rightT = $('.right_title').height()
		var lacuna = (leftC - rightT) / 2;
		var screenHeight = $(window).width()
		if(screenHeight > 1020){
			$('.right_title').css('top',lacuna)
		}
	}
	titleH ()
})