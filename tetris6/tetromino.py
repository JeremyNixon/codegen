import random

class Tetromino:
    shapes = [
        [(1, 0), (0, 1), (1, 1), (2, 1)],  # T
        [(0, 0), (1, 0), (0, 1), (1, 1)],  # O
        [(0, 0), (1, 0), (2, 0), (3, 0)],  # I
        [(1, 0), (2, 0), (0, 1), (1, 1)],  # S
        [(0, 0), (1, 0), (1, 1), (2, 1)],  # Z
        [(0, 0), (1, 0), (2, 0), (2, 1)],  # L
        [(2, 0), (0, 1), (1, 1), (2, 1)]   # J
    ]

    def __init__(self):
        self.blocks = random.choice(self.shapes)
        self.x = 4
        self.y = 0

    def rotate(self):
        self.blocks = [(y, -x) for x, y in self.blocks]

    def move_left(self):
        self.x -= 1

    def move_right(self):
        self.x += 1
