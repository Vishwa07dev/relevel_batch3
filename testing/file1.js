function sum(a,b){
    return a+b;
}

function contains(arr, num){
    for( i=0;i<arr.length;i++){
        if(arr[i]==num){
            return true ;
        }
    }

    return false ;
}

module.exports = {
    sum : sum,
    contains : contains
}