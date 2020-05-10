export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations
}

function mergeSortHelper(array, startIndex, endIndex, auxiliaryArray, animations) {
    if (startIndex === endIndex) return;
    const pivot = Math.floor((startIndex+endIndex)/2);
    mergeSortHelper(auxiliaryArray, startIndex, pivot, array, animations);
    mergeSortHelper(auxiliaryArray, pivot+1, endIndex, array, animations);
    doMerge(array, startIndex, pivot, endIndex, auxiliaryArray, animations);
}

function doMerge(array, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;

    while (i <= middleIndex && j <= endIndex) {
        // Push the two numbers being compared
        animations.push([i,j]);
        animations.push([i,j]);
        // Overwrite the value at the index k in the original array
        // with the lower between the auxiliary Array at indexes i, j
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            array[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            array[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middleIndex) {
        // Push the two numbers being compared
        animations.push([i,i]);
        animations.push([i,i]);
        // Overwrite the value at the index k in the original array
        // with the value at index i in auxiliary array
        animations.push([k, auxiliaryArray[i]]);
        array[k++] = auxiliaryArray[i++];
    }

    while (j <= endIndex) {
        // Push the two numbers being compared
        animations.push([j,j]);
        animations.push([j,j]);
        // Overwrite the value at the index k in the original array
        // with the value at index j in auxiliary array
        animations.push([k, auxiliaryArray[j]]);
        array[k++] = auxiliaryArray[j++];
    }


}