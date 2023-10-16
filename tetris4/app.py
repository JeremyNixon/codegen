from flask import Flask, render_template, request, jsonify
from tetris import TetrisGame

app = Flask(__name__)

game = TetrisGame()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game', methods=['POST'])
def update_game():
    action = request.json.get('action')
    if action == 'move_left':
        game.move_left()
    elif action == 'move_right':
        game.move_right()
    elif action == 'rotate':
        game.rotate()
    elif action == 'drop':
        game.drop()
    return jsonify(game.get_state())

if __name__ == '__main__':
    app.run(debug=True)
