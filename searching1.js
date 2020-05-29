function linearSearch(arr,val){
   for (let i=0;i<arr.length;i++){
       if (arr[i]===val){
           return i;
       }
   }
   return -1;

}

function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (start <= end && arr[middle] !== val) {
        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] > val) {
            end = middle;
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] == val ? middle : -1;
}