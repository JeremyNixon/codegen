const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d');

const grid = [];
const gridSize = 20;
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;

for (let i = 0; i < gridWidth; i++) {
    grid[i] = [];
    for (let j = 0; j < gridHeight; j++) {
        grid[i][j] = 0;
    }
}

let currentPiece = {
    x: gridWidth / 2,
    y: 0,
    rotation: 0 // 0: No rotation, 1: 90 degrees, 2: 180 degrees, 3: 270 degrees
};

function rotatePiece() {
    currentPiece.rotation = (currentPiece.rotation + 1) % 4;
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            rotatePiece();
            break;
        case 'ArrowRight':
            if (currentPiece.x < gridWidth - 1 && grid[currentPiece.x + 1][currentPiece.y] === 0) {
                currentPiece.x++;
            }
            break;
        case 'ArrowLeft':
            if (currentPiece.x > 0 && grid[currentPiece.x - 1][currentPiece.y] === 0) {
                currentPiece.x--;
            }
            break;
        case 'ArrowDown':
            if (currentPiece.y < gridHeight - 1 && grid[currentPiece.x][currentPiece.y + 1] === 0) {
                currentPiece.y++;
            }
            break;
    }
});

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            if (grid[i][j] === 1) {
                context.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
            }
        }
    }

    context.save();
    context.translate(currentPiece.x * gridSize + gridSize / 2, currentPiece.y * gridSize + gridSize / 2);
    context.rotate(currentPiece.rotation * Math.PI / 2);
    context.fillRect(-gridSize / 2, -gridSize / 2, gridSize, gridSize);
    context.restore();

    currentPiece.y++;
    if (currentPiece.y >= gridHeight || grid[currentPiece.x][currentPiece.y] === 1) {
        grid[currentPiece.x][currentPiece.y - 1] = 1;
        currentPiece = { x: gridWidth / 2, y: 0, rotation: 0 };
    }

    requestAnimationFrame(update);
}

update();
