const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const grid = 20;
let tetromino = [[1, 1, 1, 1]];
let tetrominoX = 5;
let tetrominoY = 0;

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < tetromino.length; row++) {
        for (let col = 0; col < tetromino[row].length; col++) {
            if (tetromino[row][col]) {
                context.fillStyle = 'white';
                context.fillRect((tetrominoX + col) * grid, (tetrominoY + row) * grid, grid - 1, grid - 1);
            }
        }
    }

    if (tetrominoY < canvas.height / grid - tetromino.length) {
        tetrominoY++;
    }

    setTimeout(update, 1000);
}

update();
