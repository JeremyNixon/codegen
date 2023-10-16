// This is a simplified version of Tetris and does not include all game features.

const canvas = document.getElementById('board');
const context = canvas.getContext('2d');
const grid = 20;
let tetromino = [[1, 1, 1, 1]];  // This is the I tetromino.
let position = {x: 5, y: 0};  // Start at the top middle of the board.

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    for (let y = 0; y < tetromino.length; y++) {
        for (let x = 0; x < tetromino[y].length; x++) {
            if (tetromino[y][x]) {
                context.fillRect((position.x + x) * grid, (position.y + y) * grid, grid, grid);
            }
        }
    }
}

function update() {
    position.y++;
    draw();
    if (collision()) {
        position.y--;
        merge();
        reset();
        if (collision()) {
            // Game over.
            position.y = 0;
        }
    }
}

function collision() {
    // This function checks for a collision with the bottom of the board.
    for (let y = 0; y < tetromino.length; y++) {
        for (let x = 0; x < tetromino[y].length; x++) {
            if (tetromino[y][x] && (board[y + position.y] && board[y + position.y][x + position.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function merge() {
    // This function merges the tetromino with the board.
    for (let y = 0; y < tetromino.length; y++) {
        for (let x = 0; x < tetromino[y].length; x++) {
            if (tetromino[y][x]) {
                board[y + position.y][x + position.x] = 1;
            }
        }
    }
}

function reset() {
    // This function resets the tetromino to the top of the board.
    position.y = 0;
    tetromino = [[1, 1, 1, 1]];
}

setInterval(update, 1000);
