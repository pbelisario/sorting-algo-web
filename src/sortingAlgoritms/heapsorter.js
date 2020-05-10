export function getHeapSortAnimations(array) {
    const animations = []
    heapSortHelper(array, animations);
    return animations;
}
let arrayLen

function heapSortHelper(array, animations) {
    arrayLen = array.length;

    for (let i = Math.floor(arrayLen/2); i >= 0; i--) {
        maxHeap(array, i, animations);
    }

    for (let i = array.length - 1; i > 0; i--) {
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([[0, i], [array[i], array[0]]]);
        swap(array, 0, i);
        arrayLen--
        maxHeap(array, 0, animations);
    }
}

function swap(array, left, right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function maxHeap(array, i, animations) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < arrayLen && array[left] > array[max]) max = left;
    if (right < arrayLen && array[right] > array[max]) max = right;
    if (max !== i) {
        animations.push([i, max]);
        animations.push([i, max]);
        animations.push([[i, max], [array[max], array[i]]]);
        swap(array, i, max);
        maxHeap(array, max, animations)
    }
}