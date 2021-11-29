function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
	blueShirtHeights.sort((a, b) => b - a);
	const blueFirst = redShirtHeights[0] > blueShirtHeights[0];
	for (let i = 0; i < blueShirtHeights.length; i++) {
		if (blueFirst) {
			if (blueShirtHeights[i] >= redShirtHeights[i]) {
				return false;
			}
		} else if (redShirtHeights[i] >= blueShirtHeights[i]) {
			return false;
		}
	}
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;

