from flask import Flask, render_template, request
import game_logic

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/move', methods=['POST'])
def move():
    direction = request.form.get('direction')
    game_logic.move(direction)
    return 'OK'

if __name__ == '__main__':
    app.run(debug=True)
