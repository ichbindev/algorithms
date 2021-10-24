def numberOfWaysToTraverseGraph(width, height):
    graph = [[0 for x in range(width)] for y in range(height)]
	for col in range(width):
		for row in range(height):
			if isBorder(row, col):
				graph[row][col] = 1
			else:
				up = graph[row - 1][col]
				left = graph[row][col - 1]
				graph[row][col] = up + left
	return graph[height - 1][width - 1]

def isBorder(row, col):
	return row == 0 or col == 0
