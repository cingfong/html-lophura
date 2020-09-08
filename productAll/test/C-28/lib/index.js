$(document).ready(function () {
	$('.smallImgOnly').click(function () {
		var nowImgSrc = $(this).attr('src')
		$('.bigImgOnly').attr('src',nowImgSrc)
     $('.bigImgOnly').blowup({
        "background" : "white",
        "width" : 200,
        "height" : 200,
        "scale" : 0.8
     });
	})
    var htmlWidth = $('html').width()
    if(htmlWidth < 550){
        $('#BlowupLens').css('display','none')
    }
    // $(window)
})