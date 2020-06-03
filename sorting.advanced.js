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




//Radix Sort

function radixSort(arr) {
    max = maxDigit(arr);

    for (let i = 0; i < max; i++) {
        let array = new Array(10).fill().map(e => [])
        for (let j = 0; j < arr.length; j++) {
            let pos = getDigit(arr[j], i);
            array[pos] = array[pos].concat(arr[j]);
        }
        arr = array.flat();
    }
    return arr;

}


function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function maxDigit(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }
    return max
}

function digitCount(num) {
    if (num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

radixSort([55, 5, 7, 11, 88, 100, 1, 2, 6, 11, 23, 65, 99]);