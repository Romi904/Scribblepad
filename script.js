console.log('running...');

const spanEl = document.getElementById('size');
const btn1 = document.getElementById('increase');
const btn2 = document.getElementById('decrease');
const colorEl = document.getElementById('color');
const canvas = document.getElementById('canvas');
const reset = document.getElementById('reset');
const ctx = canvas.getContext("2d");

var size = 10;
let isPressed = false;
let color = "blue";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    // console.log(isPressed);
    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

btn1.addEventListener("click", () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }

    spanEl.innerText = size;
});
btn2.addEventListener("click", () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }

    spanEl.innerText = size;
});

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
})
reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});