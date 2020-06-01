function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let solutionArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            solutionArr.push(arr1[i]);
            i++
        } else {
            solutionArr.push(arr2[j]);
            j++
        }
    }
    if (i != arr1.length) {
        return solutionArr.concat(arr1.slice(i))
    }
    if (j != arr2.length) {
        return solutionArr.concat(arr2.slice(j))
    }
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midpoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midpoint));
    let right = mergeSort(arr.slice(midpoint));
    return merge(left, right);
}
