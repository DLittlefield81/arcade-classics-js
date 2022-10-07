let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 5;
let ballY = 50;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    let FPS = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / FPS);

}

function moveEverything() {
    ballX = ballX + ballSpeedX;
    if (ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }

}

function drawEverything() {
    // Game Board
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    // Left Bumper
    colorRect(10, 10, 10, 100, 'white');
    // Right Bumper
    colorRect(780, 10, 10, 100, 'white');
    // ball
    colorCircle(ballX, 150, 10, 'blue')
}
function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}
function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}