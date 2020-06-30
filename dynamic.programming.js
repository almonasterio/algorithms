function fib_nemo(n,nemo=[]){
    if (nemo[n] !== undefined) return nemo[n];
    if (n<=2) return 1;
    var res=fib_nemo(n-1,nemo) +fib_nemo(n-2,nemo);
    nemo[n]=res;
    return res;
}

function fib_table(n){
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i=3;i<=n;i++){
        fibNums[i]= fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
console.log(fib_nemo(8));
        