export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    
    bubbleSortHelper(array, animations)
    return animations
}

function bubbleSortHelper(array, animations) {
    const arrayLen = array.length;
    for (let i = 0; i < arrayLen; i++) {
        for (let j = 0; j < arrayLen; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j, j+1]);
                animations.push([j, j+1]);
                animations.push([[j, j+1], [array[j+1], array[j]]]);
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
}