from board import Board
from tetromino import Tetromino

class TetrisGame:
    def __init__(self):
        self.board = Board()
        self.current_tetromino = Tetromino()

    def update(self, action):
        if action == 'rotate':
            self.current_tetromino.rotate()
        elif action == 'move_left':
            self.current_tetromino.move_left()
        elif action == 'move_right':
            self.current_tetromino.move_right()
        elif action == 'drop':
            self.board.add(self.current_tetromino)
            self.current_tetromino = Tetromino()
