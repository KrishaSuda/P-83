canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_X, last_position_of_Y;
var color = document.getElementById("input1").value;
var width_of_line = document.getElementById("input3").value;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("input1").value;
    width_of_line = document.getElementById("input3").value;
    mouseEvent = "mouseDown";
}


canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    color = document.getElementById("input1").value;
    width_of_line = document.getElementById("input3").value;
    mouseEvent = "mouseUP";
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    color = document.getElementById("input1").value;
    width_of_line = document.getElementById("input3").value;
    mouseEvent = "mouseleave";
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of X and Y coordinates = ");
        console.log("x = " + current_position_of_X + "y = "+ current_position_of_Y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);
        ctx.stroke();
    }
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("touchstart")
    last_touch_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    last_touch_position_of_Y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    console.log("touchmove");
    var current_touch_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    var current_touch_position_of_Y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_touch_position_of_X, last_touch_position_of_Y);
    ctx.lineTo(current_touch_position_of_X, current_touch_position_of_Y);
    ctx.stroke();

    last_touch_position_of_X = current_touch_position_of_X; 
    last_touch_position_of_Y = current_touch_position_of_Y;
    document.body.style.overflow = "hidden";
}

function clearArea() {
    ctx.clearRect(0, 0, canvas. width, canvas. height);
}