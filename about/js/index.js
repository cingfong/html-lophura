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
            // alert(_coon.is(event.target));
            $('#pushAll').hide();
          }
    });
     $("#pushDown").click(function(event){
            $('#navbarDropdownMenuLink').attr("aria-expanded", "flase");          //淡出消失
            $('.dropdown').removeClass("show");
            $('.dropdown-menu').removeClass("show");
      });
 });
// $(document).ready(function(){
//   $('#pushAll').hide();
//   $("#pushDown").click(function()
//   {
//     $("#pushAll").toggle();
//   });

//   $(window).resize(function(){
//     var eWidth = $(window).width();
//     if(eWidth > 992)
//       {
//         $(".layerContent").css("display", "block");
//       };
//     if(eWidth < 992)
//       {
//         $(".layerContent").css("display", "none");
//       };
//   });
// // ----nav click----
// $(".layerTitle").click(function()
//   {

//     var eWidth = $(window).width();
//     if (eWidth < 991)
//       {
//         var content = $(this).next();
//         $(content).toggle();
//       };
//   })
// });

