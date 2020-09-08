(function () {

	var pageAll;
	var moveBout = 0;
	var pWidth = $(".photoList").width();
	// var pageAll = -($(".photoLiAl .photoList").length - 1);

	$(".ctrlL").click(function () {
		if (moveBout < 0 ){
			moveBout +=1;
			move (moveBout);
		}
	})
	$(".ctrlR").click(function () {
		if(moveBout > pageAll){
			moveBout -=1;
			move (moveBout);
		};
	})
	function move (moveBout) {
		pageAll = -($(".photoLiAl .photoList").length - 1);
		var moveWidth = pWidth * moveBout;
		$(".photoLiAl").animate({left:moveWidth})
		console.log(moveBout);
	}
})();