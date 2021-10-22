def minNumberOfCoinsForChange(n, denoms):
	numCoins = [0]
    numCoins += [float("inf")] * (n)
	for denom in denoms:
		for num in range(1, n + 1):
			if denom <= num:
				numCoins[num] = min(numCoins[num], numCoins[num - denom] + 1)
	if numCoins[n] == float("inf"): return -1
	return numCoins[n]

