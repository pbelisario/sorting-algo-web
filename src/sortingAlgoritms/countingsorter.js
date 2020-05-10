export function getCountingSortAnimations(array) {
    const animations = [];
    countingSortHelper(array, Math.min(...array), Math.max(...array), animations);
    return animations;
}

function countingSortHelper(array, min, max, animations) {

    let z = 0;
    const count = [];
    
    for (let i = min; i <= max; i++) {
        if (i < array.length) {
            animations.push([i, 0]);
            animations.push([i, 0]);
        }
        count[i] = 0;
    }

    for(let i = 0; i < array.length; i++) {
        animations[i][1]++;
        animations.push([i, animations[i][1]]);
        animations.push([i, animations[i][1]]);
        count[array[i]]++;
    }

    for (let i  = min; i <= max; i++) {
        while(count[i]-- > 0){
            animations.push([[z, i], []]);
            array[z++] = i
        }
    }
    

}