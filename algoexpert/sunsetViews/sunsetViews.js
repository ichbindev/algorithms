function sunsetViews(buildings, direction) {
  direction === 'WEST' && buildings.reverse();
  
  const nextHighestBuilding = processBuildings(buildings, direction);

  direction === 'WEST' && nextHighestBuilding.reverse();
  
  return nextHighestBuilding.reduce((a, c, i) => {
    if (c === -1) a.push(i);
    return a;
  }, []);
}

function processBuildings(buildings) {
  const stack = [],
        nextHighest = new Array(buildings.length).fill(-1);
  
  const peek = function(stack) { return stack[stack.length - 1] };
  
  for (const i of buildings.keys()) {
    while (stack.length && buildings[peek(stack)] <= buildings[i]) {
      const oldIdx = stack.pop();
      nextHighest[oldIdx] = i;
    }
    stack.push(i);

  }
  return nextHighest;
}


// Do not edit the line below.
exports.sunsetViews = sunsetViews;
