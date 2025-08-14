function sunsetViews(buildings, direction) {
  const isEast = direction === 'EAST',
        goodViews = [];
  let maxHeight = 0;

  isEast && buildings.reverse();

  for (let i = 0; i < buildings.length; i++) {
    const currentHeight = buildings[i];
    if (currentHeight > maxHeight) {
      goodViews.push(i);
      maxHeight = currentHeight;
    }
  }

  if (isEast) return goodViews.reverse().map(e =>
                       buildings.length - 1 - e
                     );
  
  return goodViews;
}



// Do not edit the line below.
exports.sunsetViews = sunsetViews;
