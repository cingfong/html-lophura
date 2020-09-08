// ----幻燈片----
$('.carousel').carousel({
  interval: 2000
});
// ------商品動作----
var page = 0;
$(".left").click(function(){
    page-=1;
    move();
});
$(".right").click(function(){
    page+=1;
    move();
});
$(".productsContent").scroll(function(){
    var nowMoveleft = $("#shopPhoto").width();
    var nowSite = $(".productsContent").scrollLeft();
    if (nowSite< nowMoveleft){page = 0} ;
    if (nowSite> nowMoveleft){page = 1} ;
    if (nowSite> nowMoveleft*2){page = 2} ;
    if (nowSite> nowMoveleft*3){page = 3} ;
    if (nowSite> nowMoveleft*4){page = 4} ;
    if (nowSite> nowMoveleft*5){page = 5} ;
});
function move(){
    if (page>screenWidth){
            page=0, $(".left").css("opacity", 0.3)
                        };
    if (page<0)         {
            page=0, $(".left").css("opacity", 0.3)
                        };
    if (page>0)         {
            $(".left").css("opacity", 1)
                        };
    var moveS = ($("#shopPhoto").width()+30)*page;
    // $(".productsContent").animate({scrollLeft: moverSite}, 1000);
    $(".productsContent").animate({scrollLeft: moveS}, 1000);
};
$(document).ready(function(){
    // ----判斷商品scroll位置----
    var shopLeft = $("productsContent").scrollLeft();
    if ( shopLeft > 175) { page = 1};
        // ----螢幕載入判斷---
    var eWidth = $(window).width();
    if (eWidth > 1200) {screenWidth = 0};
    if (eWidth < 1200) {screenWidth = 2};
    if (eWidth < 1200) {$(".right").css("opacity", 1);};
    if (eWidth < 992) {screenWidth = 3};
    if (eWidth < 768) {screenWidth = 4};
    // ----螢幕變更---
    $(window).resize(function(){
        var ewWidth = $(window).width();
        if (ewWidth > 1200) {screenWidth = 0};
        if (ewWidth < 1200) {screenWidth = 2, $(".right").css("opacity", 1)};
        if (ewWidth < 992) {screenWidth = 3};
        if (ewWidth < 768) {screenWidth = 4};
    });
});
