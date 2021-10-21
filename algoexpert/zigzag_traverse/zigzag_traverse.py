from enum import Enum

def zigzagTraverse(array):
	traversed = []
	
	# keep track of current location, bounds, and direction of travel
    row, col = 0, 0
	width, height = len(array[0]) - 1, len(array) - 1
	direction = Direction.DOWN
	
	# traverse through the array, the plan is to track direction
	# and check special cases first, otherwise travel naively
	# special cases are at the boundary and require direct logic of what to do
	while isInBounds(row, col, width, height):
		traversed.append(array[row][col])
		if direction == Direction.DOWN: # try to travel down and to the left
			if col == 0 or row == height: # edge cases first
				direction = Direction.UP
				if row == height:
					col += 1
				elif col == 0:
					row += 1
			else: # normal case for going down/left
				row += 1
				col -= 1
		else: # try and travel up and to the right
			if row == 0 or col == width: # edge cases first
				direction = direction.DOWN
				if col == width:
					row += 1
				elif row == 0:
					col += 1
			else: # normal case for going up/right
				row -= 1
				col += 1
				
	return traversed
	
def isInBounds(row, col, width, height):
	isInWidth = 0 <= col <= width
	isInHeight = 0 <= row <= height
	return isInWidth and isInHeight

class Direction(Enum):
	DOWN = 0
	UP = 1
