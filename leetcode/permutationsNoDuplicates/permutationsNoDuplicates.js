class Result {
    constructor() {
        this.arr = [];
        this.set = new Set();
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    const results = new Result;
    permute([], nums, results);
    return results.arr;
};

function permute(done, todo, results) {
    if (todo.length) {
        for (let i = 0; i < todo.length; i++) {
            const newDone = [...done, todo[i]];
            const newTodo = [...todo.slice(0, i), ...todo.slice(i + 1)];
            permute(newDone, newTodo, results);
        }
    } else {
        addToResults(results, done);
    }
}


function shittyHash(arr) {
    return arr.map(x => String(x)).join('');
}

function addToResults(results, newItem) {
    const hash = shittyHash(newItem);
    if (!results.set.has(hash)) {
        results.arr.push(newItem);
        results.set.add(hash);
    }
}

