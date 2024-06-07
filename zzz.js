document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('startButton');
    const gameArea = document.getElementById('gameArea');
    const scoreValue = document.getElementById('scoreValue');
    let score = 0;
    let interval;
    let powerUp = false;

    startButton.addEventListener('click', startGame);

    function startGame() {
        score = 0;
        scoreValue.textContent = score;
        gameArea.innerHTML = '';
        powerUp = false;
        gameArea.addEventListener('click', handleGameAreaClick);
        interval = setInterval(spawnCircle, 1000);
    }

    function spawnCircle() {
        const circle = document.createElement('div');
        circle.className = 'circle';
        const size = Math.random() * 50 + 10; // size between 10 and 60
        const x = Math.random() * (gameArea.offsetWidth - size);
        const y = Math.random() * (gameArea.offsetHeight - size);
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = color;
        circle.style.position = 'absolute';
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        circle.addEventListener('click', function (event) {
            event.stopPropagation();
            gameArea.removeChild(circle);
            score++;
            scoreValue.textContent = score;
            if (score % 10 === 0) {
                powerUp = true;
            }
        });

        gameArea.appendChild(circle);
    }

    function handleGameAreaClick(event) {
        if (!event.target.classList.contains('circle')) {
            alert(`Ai pierdut jocul. Scorul tau este: ${score}`);
            gameOver();
        }
    }

    function gameOver() {
        clearInterval(interval);
        gameArea.innerHTML = '';
        score = 0;
        scoreValue.textContent = score;
        gameArea.removeEventListener('click', handleGameAreaClick);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'x' && powerUp) {
            const circles = document.querySelectorAll('.circle');
            circles.forEach(circle => gameArea.removeChild(circle));
            powerUp = false;
        }
    });
});
