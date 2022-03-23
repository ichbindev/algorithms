/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = [];
    permute([], nums, results);
    return results.arr;
};

function permute(done, todo, results) {
    if (todo.length) {
        // the key here is to only create one recursive chain per unique number
        // at each level. this will give us unique permutations only
        const used = new Set(); 
        for (let i = 0; i < todo.length; i++) {
            if (!used.has(todo[i])) {
                const newDone = [...done, todo[i]];
                const newTodo = [...todo.slice(0, i), ...todo.slice(i + 1)];
                used.add(todo[i]);
                permute(newDone, newTodo, results);
            }
        }
    } else {
        results.push(done);
    }
}


