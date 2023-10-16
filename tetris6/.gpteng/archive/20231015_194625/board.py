class Board:
    def __init__(self):
        self.grid = [[0 for _ in range(10)] for _ in range(20)]

    def add(self, tetromino):
        for x, y in tetromino.blocks:
            self.grid[y][x] = 1
        self.clear_lines()

    def clear_lines(self):
        self.grid = [line for line in self.grid if 0 in line]
        while len(self.grid) < 20:
            self.grid.insert(0, [0 for _ in range(10)])
