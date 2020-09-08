$(window).on('load', function() {
    $('.sp-wrap').smoothproducts();
});
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
    var scrollMove = page*95
    $(".sp-thumbs").animate({scrollLeft: scrollMove},700);
};

// $(document).ready(function(){

//     var scrollLeft = $(".sp-thumbs").scrollLeft();
//     console.log(scrollLeft);
//         // ----螢幕載入判斷---
//     var eWidth = $(window).width();
//     if (eWidth < 585) {screenWidth_product = 1};
//     if (eWidth < 500) {screenWidth_product = 2};
//     // ----螢幕變更---
//     $(window).resize(function(){
//         var ewWidth = $(window).width();
//         if (ewWidth > 585) {screenWidth_product = 1};
//         if (ewWidth < 500) {screenWidth_product = 2};
//     });
// });
// $(function(){
//     alert($(".sp-wrap>a").length);
// });
// -----nav title----
$(document).ready(function(){
  $('#pushAll').hide();
  $("#pushDown").click(function()
  {
    $("#pushAll").toggle();
  });

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
// ----nav click test-----

$(".downTwo").click(function(e) {
  $(this).show();
      e.stopPropagation();
});
$(document).click(function(event) {

  $("#pushAll").hide();
});

$("#navbarDropdownMenuLink").click(function(event) {

  $("#pushAll").hide();
});