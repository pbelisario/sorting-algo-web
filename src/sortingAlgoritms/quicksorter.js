export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations)
    return animations
}

function quickSort(array, curIdx, endIdx, animations) {
    var index;
    if (array.length > 1) {
        index = partition(array, curIdx, endIdx, animations)
        if (curIdx < index - 1) {
            quickSort(array, curIdx, index-1, animations);
        }
        if (index < endIdx){
            quickSort(array, index, endIdx, animations)
        }
    }
    return animations
}

function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right, animations) {
    var pivot = items[Math.floor((left+right)/2)], // Middle One
        leftPointer = left,
        rightPointer = right;
    while(leftPointer <= rightPointer) {
        while(items[leftPointer] < pivot) leftPointer++;
        while(items[rightPointer] > pivot) rightPointer--
        if (leftPointer <= rightPointer){
            animations.push([leftPointer, rightPointer]);
            animations.push([leftPointer, rightPointer]);
            
            animations.push([[leftPointer, rightPointer], [items[rightPointer],items[leftPointer]]])
            swap(items, leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        }
    }
    return leftPointer;
}