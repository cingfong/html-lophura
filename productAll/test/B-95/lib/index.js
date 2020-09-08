var colorOnNum = 0
$('.color_list').hover(function () {
	var colorNum = $(this).index() - 3
	console.log(colorNum)
	if(colorNum == 0){
		$('.hover_color').text('Blue')
	}else if(colorNum == 1){
		$('.hover_color').text('Whitee')
	}else{
		$('.hover_color').text('Blue')
	}
},
function(){
	if(colorOnNum == 0){
		$('.hover_color').text('Blue')
	}else if(colorOnNum == 1){
		$('.hover_color').text('Whitee')
	}else{
		$('.hover_color').text('Blue')
	}
})

//
$(document).ready(function () {
	var windowWidth = $(window).width()
	console.log(windowWidth)
	if(windowWidth < 1150 && windowWidth > 730 ){
		console.log(windowWidth)
		var nameColorHeight = $('.name_color').height()
		var right_allHeight = $('.right_all').height()
		var screenHeight = nameColorHeight - 600 + right_allHeight
		$('body').height(screenHeight)
		$('.left_all').css('height','100%')
	}
	if(windowWidth < 880 && windowWidth > 730 ){
		var productPhotoHeight = $('.product_photo').height()
		$('.life_img').css({'top':productPhotoHeight,'left':'30%'})
	}
})
