def tournamentWinner(competitions, results):
	scores = {}
	for i, result in enumerate(results):
		winner = getWinner(competitions[i], result)
		updateScores(winner, scores)
	return max(scores, key=scores.get)

def getWinner(competition, result):
	if result == 0:
		return competition[1]
	else:
		return competition[0]
	
def updateScores(winner, scores):
	score = scores[winner] + 1 if winner in scores else 1
	scores[winner] = score
