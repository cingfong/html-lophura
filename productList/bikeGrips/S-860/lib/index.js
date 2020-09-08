var wt ;
$(document).ready(function(){
	wt = 0;
	function whiteNone(){
		if (wt > 5){
			$(".white").css("display","none");
		}else{
			wt = wt+1;
			var t = setInterval(whiteNone,1000);
		}
	};
	whiteNone();
});
