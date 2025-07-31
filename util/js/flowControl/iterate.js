/*****************
* LOOP 
******************/

// do something x times
for (const _ of Array.from({ length: x }).keys()) {}
for (const _ of Array(x)) {}

let times = x;
while (x--) {}

// for each number (0, end - 1)
for (const i of Array.from({ length: end }).keys()) {}
for (const i of [...Array(end)].keys()) {}