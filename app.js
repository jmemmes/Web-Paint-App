var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

var pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
    if (e.buttons !== 1) return;
 
    var color = document.getElementById("hex").value;

    ctx.beginPath();

    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
 
    ctx.stroke();
}

window.addEventListener("resize", resize);
window.addEventListener("mousemove", draw);
window.addEventListener("mousedown", setPosition);
window.addEventListener("mouseenter", setPosition);
