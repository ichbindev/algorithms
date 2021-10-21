def numberOfWaysToMakeChange(n, denoms):
	numWays = [1]
	numWays += [0] * n

	for denom in denoms:
    	for total in range(n + 1):
			if denom <= total:
				numWays[total] += numWays[total - denom]
	return numWays[n]

