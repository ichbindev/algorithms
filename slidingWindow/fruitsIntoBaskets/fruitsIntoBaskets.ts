function totalFruit(fruits: number[]): number {
    let start = 0,
        maxPicked = 0,
        picked: {[key: string]: number} = {};
    
    for (let end = 0; end < fruits.length; end++) {
        const fruit = fruits[end];
        // add fruit to window
        if (!picked[fruit]) {
            picked[fruit] = 0;
        }
        picked[fruit]++;
        
        // if you have too many types of fruits
            // shrink window until you don't
        while (Object.keys(picked).length > 2) {
            const fruit = fruits[start];
            removeFruit(picked, fruit);
            start++;
        }

        // check if you have the most picked 
        maxPicked = Math.max(maxPicked, countFruits(picked));
    }
    return maxPicked;
};

function countFruits(trees: { [key: string]: number }): number {
    return Object.keys(trees).reduce((a, t) => a + trees[t], 0);
};

function removeFruit(trees: { [key: string]: number }, tree: number) {
    const count = --trees[tree];
    if (!count) {
        delete trees[tree];
    }
};
