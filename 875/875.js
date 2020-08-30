/*
Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.
*/


/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    // calculate how many hours it takes to eat bananas
    function getHours(piles, bananasPerHour) {
        let requiredHours = 0;
        for (let pile of piles) {
            requiredHours += Math.ceil(pile / bananasPerHour);
        }
        return requiredHours;
    }
    
    // binary seach for the smallest element that lets K take H
    // save last successful value since we're trying to find the 
    // smallest successful value we may go too low
    let low = 1, high = Math.max(...piles);
    let successful = 0;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let hoursTaken = getHours(piles, mid);
        if (H === hoursTaken) {
            return mid;
        }else if (hoursTaken > H) {
            low = mid + 1;
        } else if (hoursTaken < H) {
            successful = mid;
            high = mid - 1;
        }
    }
    return successful;
};
