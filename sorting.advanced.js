//Merge Sort

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


//Quick Sort

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        console.log(arr)
        let pivotIdx = pivotHelper(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)

        quickSort(arr, pivotIdx + 1, right)

    }
    return arr;

}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < arr[start]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)

    return swapIdx;

}

quickSort([55, 5, 7, 11, 88, 100, 1, 2, 6, 11, 23, 65, 99]);
