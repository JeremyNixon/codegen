from flask import Flask, render_template, request, jsonify
from tetris_game import TetrisGame

app = Flask(__name__)
game = TetrisGame()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game', methods=['POST'])
def update_game():
    action = request.json['action']
    game.update(action)
    return jsonify(game.board)

if __name__ == '__main__':
    app.run(debug=True)
