
// Model
var color = $("strokeColor").val();
var width = parseInt($("strokeWidth").val());
var ctx=$("canvas")[0].getContext('2d');
var drawing_boo = false;

// Controller
function stopDrawing() {
    drawing_boo = false;
}

function startDrawing() {
    drawing_boo = true;
    console.log(drawing_boo);
}

function changeColor() {
    color = $(this).val();
    console.log('color set to: ' + color);
}

function changeWidth() {
    width = parseInt($(this).val());
    console.log('width set to: ' + width);
}

function maybeDraw(me) {
    if (drawing_boo === false) {
        return;
    }
    console.log('color: ' + color);
    console.log('width: ' + width);
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    var x_int = me.pageX - this.offsetLeft;
    var y_int = me.pageY - this.offsetTop;
    ctx.arc(x_int,y_int,75,0,Math.PI*2); 
    ctx.fill();
}

$("canvas").mouseup(stopDrawing);
$("canvas").mousedown(startDrawing);
$("canvas").mousemove(maybeDraw);
$("[type='color']").click(changeColor);
$("[type='range']").change(changeWidth);
