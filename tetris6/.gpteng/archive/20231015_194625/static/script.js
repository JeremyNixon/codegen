function updateGame(action) {
    fetch('/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({action: action}),
    })
    .then(response => response.json())
    .then(data => {
        let gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        for (let row of data) {
            for (let cell of row) {
                let block = document.createElement('div');
                block.style.width = '20px';
                block.style.height = '20px';
                block.style.float = 'left';
                block.style.backgroundColor = cell ? 'black' : 'white';
                gameBoard.appendChild(block);
            }
            gameBoard.appendChild(document.createElement('br'));
        }
    });
}
