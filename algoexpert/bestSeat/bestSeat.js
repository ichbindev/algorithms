/*
  You walk into a theatre you're about to see a show in. The usher within the
  theatre walks you to your row and mentions you're allowed to sit anywhere
  within the given row. Naturally you'd like to sit in the seat that gives you
  the most space. You also would prefer this space to be evenly distributed on
  either side of you (e.g. if there are three empty seats in a row, you would
  prefer to sit in the middle of those three seats).

  
  Given the theatre row represented as an integer array, return
  the seat index of where you should sit. Ones represent occupied seats and zeroes
  represent empty seats.

  
  You may assume that someone is always sitting in the
  first and last seat of the row. Whenever there are two equally good seats,
  you should sit in the seat with the lower index. If there is no seat to sit
  in, return -1. The given array will always have a length of at least one
  and contain only ones and zeroes.
*/
function bestSeat(seats) {

  // find the section with the most contiguous 0s
  // tracking its length and end index
  let current0s = 0, most0s = 0;
  let bestSectionEndIdx = -1;
  
  for (let i = 1; i < seats.length - 1; i++) {
    if (seats[i] === 0) {
      current0s++;
    } else {
      current0s = 0;
    }
    if (current0s > most0s) {
      most0s = current0s;
      bestSectionEndIdx = i;
    }
  }

  // now that we have the best section size and end point
  // calculate the start point and middle seat
  if (bestSectionEndIdx > 0) {
    const startIdx = bestSectionEndIdx - most0s + 1;
    return  Math.floor((startIdx + bestSectionEndIdx) / 2);
  }
  
  return -1;
}


// Do not edit the line below.
exports.bestSeat = bestSeat;
