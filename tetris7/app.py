from flask import Flask, render_template, request, jsonify
from game import Game

app = Flask(__name__)
game = Game()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game', methods=['POST'])
def update_game():
    action = request.json.get('action')
    if action == 'start':
        game.start()
    elif action == 'move':
        direction = request.json.get('direction')
        game.move(direction)
    elif action == 'rotate':
        game.rotate()
    return jsonify(game.state)

if __name__ == '__main__':
    app.run(debug=True)
