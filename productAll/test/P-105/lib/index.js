// hover
    var phone ;
window.onload = function () {
    var images = [];
    var image = document.getElementById("body").getElementsByTagName("img");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {phone = true;
        }else{
            phone = false;
        };
    onmousemove = function(e){
        var mouseLeft = e.pageX;
        var mouseTop = e.pageY;
        var $windowHeight = $(window).height();
        var $windowTop;
        var $windowPosition;
        var $photo = [];
        if (!phone){
            for (var i = image.length - 1; i >= 0; i--) {
                var imageLeft = getElementLeft(image[i]);
                var imagePositionL = image[i].offsetWidth+imageLeft;
                var imageTop = getElementTop(image[i]);
                var imagePositionT = image[i].offsetHeight+imageTop;

                if(mouseLeft > imageLeft && mouseLeft < imagePositionL
                   && mouseTop > imageTop && mouseTop < imagePositionT){
                    image[i].setAttribute("style","-webkit-filter:grayscale(" + 0 + "%)")
                }else{
                    image[i].setAttribute("style","-webkit-filter:grayscale(" + 200 + "%)")
                }
            }
        }else{
            $(window).scroll(function(){
                $windowTop = $(window).scrollTop();
                $windowPosition = $windowTop + $windowHeight;
                console.log($("img").offset())
                for (var i = 0 ; i < $("img").length ; i++) {
                $photo[i] = $("img").eq(i).offset();
                    if( $windowPosition > $photo[i].top){
                        $("img").eq(i).addClass("scrollPhoto");
                    }else{
                        $("img").eq(i).removeClass("scrollPhoto"); ;
                    }
                }
            });
        }
    }
　　function getElementLeft(element){
　　　　var actualLeft = element.offsetLeft;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}

　　　　return actualLeft;
　　}
　　function getElementTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}

　　　　return actualTop;
　　}

};
// make painting

var canvas = document.getElementById('makePainting');
var ctx = canvas.getContext('2d');
var canvasPos = canvas.getBoundingClientRect();

var dragging = false;

var body = document.getElementById("body")
body.addEventListener('mousedown',mouseDown);
body.addEventListener('mousemove',mouseMove);
body.addEventListener('mouseup',mouseUp);

var paths = [];
var globImg = null;

var canvasW = document.body.clientWidth;
var canvasH = document.body.clientHeight;

canvas.width = canvasW;
canvas.height = canvasH;

function mouseDown(e){
    var pos = getCursorPosition(e);
                
    dragging = true;
    paths.push([pos]);
}
function mouseMove(e){
    var pos, i;

    if (!dragging) {
        return;
    }
    
    pos = getCursorPosition(e);
    paths[paths.length-1].push(pos);
    
    refresh();
}

function mouseUp(e){
    dragging = false;
}

function refresh() {
    ctx.clearRect(0, 0, canvasW, canvasH);
    
    for (var i=0; i<paths.length; ++i) {
        var path = paths[i];
        
        if (path.length<1)
            continue;
        
        // ctx.strokeStyle = 'rgba(0,71,171,0.7)';
        ctx.strokeStyle = 'rgba(255,0,0,0.6)';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        
        for (var j=1; j<path.length; ++j)
            ctx.lineTo(path[j].x, path[j].y);
        
        ctx.stroke();
        
    }
}

function getCursorPosition(e) {
    return {
        x: e.pageX - canvasPos.left,
        y: e.pageY - canvasPos.top
    };
};


