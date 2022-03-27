const { off } = require("process");


function maxPair(arr) {

    //Sort this array
    arr.sort((a, b) => (a - b));  // TC: O(nlogn)

    //I need to find the sum of elemets at the even index 0 ,2,4,6
    let res = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
        res = res + arr[i];
    }

    return res;

}

console.log(maxPair([2, 1, 3, 4]));


/**
 * Finding the triplets
 */

function tripletsSum(arr) {
    //First sort the array

    arr.sort((a, b) => a - b);  // O(nlogn)

    //  a , b and c=  a+b+c =0

    for (i = 0; i < arr.length - 3; i++) {  // -- O(n*n) 

        let a = arr[i];

        // I am left with elements from i+1 to last index
        //We are going to use two pointer approach
        left = i + 1;
        right = arr.length - 1;
        while (left < right) {   // --n
            if (arr[left] + arr[right] == -a) {
                console.log(arr[left] + " : " + arr[right] + " : " + a);
                left++;
                right--;

            } else if (arr[left] + arr[right] > -a) {
                right--;
            } else {
                left++;
            }
        }
    }

    
}


/**
     * Reduce the array
     */

 function reduceArra(arr) {

    //Since we have to maintain the order

    let temp = [];

    for (i = 0; i < arr.length; i++) {
        temp[i] = arr[i];
    }
    temp.sort((a, b) => a - b);

    var index = 0;
    let map = new Map();

    for (i = 0; i < temp.length; i++) {
        map.set(temp[i], index++);
    }

    for (i = 0; i < arr.length; i++) {
        arr[i] = map.get(arr[i]);
    }
}


//var testArr = [1,2,5,10,3,4];

var testArr2 = [10,6,8,7,11,5];

console.log("before", testArr2);
reduceArra(testArr2);
console.log("after", testArr2);

