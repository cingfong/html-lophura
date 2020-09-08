// // hover
// window.onload = function () {
//     var images = [];
//     var image = document.getElementById("hyperlink").getElementsByTagName("a");
//     var c=document.getElementById("makePainting");
//     var ctx=c.getContext("2d");
//     var canvasW = document.body.clientWidth;
//     var canvasH = document.body.clientHeight;
//     c.width = canvasW;
//     c.height = canvasH;

//     onmousemove = function(e){
//         var mouseLeft = e.pageX;
//         var mouseTop = e.pageY;
//         var lineRe=true ;
//         var lineMove = true ;
//         for (var i = image.length - 1; i >= 0; i--) {
//             var imageLeft = getElementLeft(image[i]);
//             var imagePositionL = image[i].offsetWidth+imageLeft;
//             var imageTop = getElementTop(image[i]);
//             var imagePositionT = image[i].offsetHeight+imageTop;
//             var imageHoverL = getElementLeft(image[i])+80;
//             var imageHoverT = getElementTop(image[i])+80;
//             if(mouseLeft > imageLeft && mouseLeft < imagePositionL
//                && mouseTop > imageTop && mouseTop < imagePositionT && lineRe==true){
//                 lineRe=false ;
//                 ctx.strokeStyle = 'rgb(255,0,0)';
//                 ctx.lineCap = 'round';
//                 ctx.lineJoin = 'round';
//                 ctx.lineWidth = 15;
//                 var line = 0;
//                 painting = function (){
//                     // for (var i = 0; i <= 2*Math.PI; i+=0.03) {
//                     //     ctx.beginPath();
//                     //     // ctx.clearRect(0,0,c.width,c.height)
//                     //     ctx.ellipse(imageHoverL, imageHoverT, 150, 75, 4*Math.PI/36, 0, i ,false);
//                     //     ctx.stroke();
//                     //     setTimeout(painting,100);
//                     // }
//                     if (line <= 2*Math.PI){
//                         ctx.beginPath();
//                         // ctx.clearRect(0,0,c.width,c.height)
//                         ctx.ellipse(imageLeft+80, imageTop+80, 150, 75, 4*Math.PI/36, 0, line,false);
//                         ctx.stroke();
//                         line += 0.08;
//                         setTimeout(painting,50);
//                     };
//                 };
//                 if(lineMove){
//                     painting();
//                     lineMove = false;
//                 }
//             // }
//             }else if(lineRe){
//                 // image[i].setAttribute("style","background-color: none;");
//                 ctx.clearRect(0,0,c.width,c.height); 
//             }else{
//                 lineRe=true;
//                 ctx.clearRect(0,0,c.width,c.height); 
//             }

//         }
//     }
// 　　function getElementLeft(element){
// 　　　　var actualLeft = element.offsetLeft;
// 　　　　var current = element.offsetParent;

// 　　　　while (current !== null){
// 　　　　　　actualLeft += current.offsetLeft;
// 　　　　　　current = current.offsetParent;
// 　　　　}

// 　　　　return actualLeft;
// 　　}
// 　　function getElementTop(element){
// 　　　　var actualTop = element.offsetTop;
// 　　　　var current = element.offsetParent;

// 　　　　while (current !== null){
// 　　　　　　actualTop += current.offsetTop;
// 　　　　　　current = current.offsetParent;
// 　　　　}

// 　　　　return actualTop;
// 　　}

// };



//照片開啟動作
    var photoOn = true ;
$(document).ready(function(){
    $(".switch").hover(function(){
        $(this).stop(true).next("div").animate({opacity: 1},300);
        $(".bodyTwo").stop().animate({opacity: 0},300);
    },function(){
        $(this).stop(true).next("div").animate({opacity: 0},300);
        $(".bodyTwo").stop().animate({opacity: 0.8},300)
        // alert("a")
    });
    //hoverLink大小

    var screenWidth =  $(".test").width();
    var screenHieght = $(".test").height();
    $(".hoverLink").css("width",screenWidth).css("height",screenHieght);
    //RWD顯示圖片位置
    // if(screenWidth< 870){
    //     $(".photo").css("top",screenHieght);
    //     $(".content").css("top",screenHieght);
    // }
    //視窗高寬比利變化
    var W = $(window).width();
    var H = $(window).height();
    var TH = $(".content").height();
    var needH = TH+screenHieght;
    if (needH < H){
        $(".photo").css("top",screenHieght);
        $(".content").css("top",screenHieght);
    }
    
});