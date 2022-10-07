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
    }, 1000/FPS);
    
}

function moveEverything() {
    ballX = ballX + ballSpeedX;
    if (ballX > 800) {
        ballSpeedX = -ballSpeedX;
}
    
}

function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    // Left Bumper
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(10, 10, 10, 100);
    // Right Bumper
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(780, 10, 10, 100);
    // ball
    canvasContext.fillStyle = 'blue';
    canvasContext.fillRect(ballX, 300, 10, 10);
}