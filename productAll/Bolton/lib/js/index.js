// ----商品插件-----
$(window).on('load', function() {
    $('.sp-wrap').smoothproducts();
});

//商品滑動 往左往右滑動
var page = 0;
$(".controlLeft").click(function(){
    page-=1;
    move();
});
$(".controlRight").click(function(){
    page+=1;
    move();
});
function move(){
    if (page>screenWidth_product){page=0};
    if (page<0){page=0};
    var scrollMove = page*100
    $(".sp-thumbs").animate({scrollLeft: scrollMove},700);
};

$(document).ready(function(){

    var scrollLeft = $(".sp-thumbs").scrollLeft();
        // ----螢幕載入判斷---
    var eWidth = $(window).width();
    if (eWidth < 585) {screenWidth_product = 1};
    if (eWidth < 500) {screenWidth_product = 2};
    // ----螢幕變更---
    $(window).resize(function(){
        var ewWidth = $(window).width();
        if (ewWidth > 585) {screenWidth_product = 1};
        if (ewWidth < 500) {screenWidth_product = 2};
    });
});

// -----nav title----
var p = 0 ;
$(document).ready(function(){
  $('#pushAll').hide();
  $(window).resize(function(){
    var eWidth = $(window).width();
    if(eWidth > 992)
      {
        $(".layerContent").css("display", "block");
      };
    if(eWidth < 992)
      {
        $(".layerContent").css("display", "none");
      };
  });
// ----nav click----
$(".layerTitle").click(function()
  {

    var eWidth = $(window).width();
    if (eWidth < 991)
      {
        var content = $(this).next();
        $(content).toggle();
      };
  })
});
$(function () {
     $('#pushDown').click(function (event) {
         event.stopPropagation();
         $('#pushAll').toggle();
         return false;
     });
     $("#navbarDropdownMenuLink").click(function(event){
          var _con = $('#pushAll');
          if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $('#pushAll').hide();
          }
      });
     $(document).click(function(event){
          var _con = $('#pushAll');
          if(!_con.is(event.target) && _con.has(event.target).length === 0){
            $('#pushAll').hide();
          }
    });
     $("#pushDown").click(function(event){
            $('#navbarDropdownMenuLink').attr("aria-expanded", "flase");          //淡出消失
            $('.dropdown').removeClass("show");
            $('.dropdown-menu').removeClass("show");
      });
 });

