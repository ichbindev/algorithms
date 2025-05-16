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

  let mostOpenSeats = 0;
  let bestSeatIndex = -1;

  let left = 0;
  while (left < seats.length) {
    let right = left + 1;
    while (right < seats.length && seats[right] === 0) {
      right++;
    }
    
    // will end up with seats[left] and seats[right] === 1
    // either contiguous 1s, or surrounding 0s
    // see if it's the most open seats you've seen so far and
    // if so calculate the left-most center seat
    let openSeats = right - left - 1;
    if (openSeats > mostOpenSeats) {
      mostOpenSeats = openSeats;
      bestSeatIndex = Math.floor((left + right) / 2);
    }

    left = right;
  }
  
  return bestSeatIndex;
}


// Do not edit the line below.
exports.bestSeat = bestSeat;
