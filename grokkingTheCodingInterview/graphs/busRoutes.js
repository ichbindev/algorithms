/*
You are given an array routes where routes[i] is the list of bus 
stops that the ithe bus travels in a cyclic manner. For example, 
if routes[0] = [2, 3, 7], it means that bus 0 travels through 
the stops 2 -> 3 -> 7 -> 2 -> 3 -> 7 ... and then repeats this 
sequence indefinitely.

You start at a bus stop called source and wish to travel to a bus 
stop called target using the bus routes. You can switch buses at 
any bus stop that is common to the routes of two buses.

Return the minimum number of buses you need to take to travel from 
source to target. If it is not possible to reach the target, return 
-1.

Constraints:
- 1 <= routes.length <= 500.
- 1 <= routes[i].length <= 10^5
- All the values of routes[i] are unique.
- sum(routes[i].length) <= 10^5
- 0 <= routes[i][j] < 10^6
- 0 <= source, target < 10^6

*/

class TripTracker {
  constructor(stopNumber, numBusesUsed = 0) {
    this.stopNumber = stopNumber;
    this.numBusesUsed = numBusesUsed;
  }

  toString() {
    return `Stop: ${stopNumber}, Buses Used: ${numBusesUsed}`;
  }
}

class Solution {
  numBusesToDestination(routes, source, target) {
    const stopToBusNumber = routes.reduce((acc, route, bus) => {
      route.forEach((stop) => {
        if (!acc[stop]) acc[stop] = [];
        acc[stop].push(bus);
      });
      return acc;
    }, {});

    const busesUsed = new Set(),
      stopsVisited = new Set(),
      queue = [new TripTracker(source, 0)];

    while (queue.length) {
      let { stopNumber, numBusesUsed } = queue.shift();
      stopsVisited.add(stopNumber);

      for (const bus of stopToBusNumber[stopNumber]) {
        if (busesUsed.has(bus)) continue;
        busesUsed.add(bus);
        ++numBusesUsed;

        for (const s of routes[bus]) {
          if (s === target) return numBusesUsed;

          if (!stopsVisited.has(s)) {
            queue.push(new TripTracker(s, numBusesUsed));
          }
        }
      }
    }

    return -1;
  }
}
