function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            let noSwaps=true;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (i != minIdx) {
            let temp = arr[i]
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            if (currentVal < arr[j]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }

        }

    }
    return arr
}

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
