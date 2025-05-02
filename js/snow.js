
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 2,
            speedY: Math.random() * 1 + 0.5,
            opacity: Math.random()
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    snowflakes.forEach(flake => {
        ctx.globalAlpha = flake.opacity;
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    });
    ctx.fill();
    ctx.globalAlpha = 1.0;
}

function moveSnowflakes() {
    snowflakes.forEach(flake => {
        flake.y += flake.speedY;
        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    });
}

function updateSnowfall() {
    drawSnowflakes();
    moveSnowflakes();
    requestAnimationFrame(updateSnowfall);
}

createSnowflakes();
updateSnowfall();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
