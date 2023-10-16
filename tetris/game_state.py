class GameState:
    def __init__(self):
        self.grid = [[0 for _ in range(20)] for _ in range(10)]
        self.current_piece = [5, 0]

    def update(self):
        self.current_piece[1] += 1
        if self.current_piece[1] >= 20 or self.grid[self.current_piece[0]][self.current_piece[1]] == 1:
            self.grid[self.current_piece[0]][self.current_piece[1] - 1] = 1
            self.current_piece = [5, 0]
