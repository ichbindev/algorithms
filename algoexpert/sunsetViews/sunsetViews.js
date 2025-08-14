function sunsetViews(buildings, direction) {
  const nextHighestBuilding = processBuildings(buildings, direction);
  return nextHighestBuilding.reduce((a, c, i) => {
    if (c === -1) a.push(i);
    return a;
  }, []);
}

function processBuildings(buildings, direction) {
  const stack = [],
        nextHighest = new Array(buildings.length).fill(-1);
  
  const peek = function(stack) { return stack[stack.length - 1] };
  const { start, checkEnd, update } = mapDirection(direction, buildings.length);
  
  for (let i = start; checkEnd(i); i = update(i)) {
    while (stack.length && buildings[peek(stack)] <= buildings[i]) {
      const oldIdx = stack.pop();
      nextHighest[oldIdx] = i;
    }
    stack.push(i);

  }
  return nextHighest;
}

function mapDirection(direction, length) {
  if (direction ==='EAST') {
    return {
      'start': 0,
      'checkEnd': i => i < length,
      'update': i => i + 1
    };
  } else {
    return {
      'start': length - 1,
      'checkEnd': i => i >= 0,
      'update': i => i - 1
    };
  }
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
