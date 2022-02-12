/**
 * Code for the bubble sort
 */

function bubbleSort(arr){
 
   for( i = arr.length -1 ;i>=0;i--){

        //In every iteration of this for loop, I want to bring
        //one element to it's right position
       for(j=0;j<i;j++){
            //if left is bigger than right, swap
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
       }}

}


function selectionSort(arr){

   for(i=0;i<arr.length;i++){  //n
       var min_index =i ;
       //find the index of the minumum element from i->n

       for(j=i+1;j<arr.length;j++){  //n
           if(arr[j]<arr[min_index]){
               min_index =j;
           }
       }

       //min_index will indicate smallest element

       // I need to swap element at ith and min_index position
       temp = arr[min_index];
       arr[min_index] = arr[i];
       arr[i]= temp;
   }

}

/**
 * TC - Worst - O(n*n)
 * Best -> O(n*n)
 */

/**
 * Insertion Sort cod
 */

function insertionSort(arr){

   for(i=1;i<arr.length;i++){
        var v = arr[i];
        j=i-1;
        while(j>=0 && arr[j]>v){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=v;
    }
}

/**
 * Find the factorial of a number
 * 
 * fact(3) -> 6
 * 
 * fact(4) -> 24
 * 
 * fact(5) = 5*fact(4)
 */

function fact( num ){

    //Base condition
    if(num<=1){
        return 1 ;
    }

    //logic and recursive call
    return num*fact(num-1);
}




arr = [1,3,5,4,2,9];

console.log(arr);

mergeSort(arr, 0, 5);

console.log(arr);




/**
 * MergeSort
 * 
 *  arr = {6,5,4,3,2,1};
 * 
 * mergeSort(arr, 0, 5)  -> {1,2,3,4,5,6}
 * 
 * mergeSort(arr, 1,4) -> { 6,2,3,4,5,1}
 * 
 * mergeSort(arr, 0, 2) -> {4,5,6 ,3,2,1}
 * 
 * mergeSort(arr, 3,5) -> {6,5,4,1,2,3}
 */
function mergeSort(arr, start, end) { 

    //Base condition
    if(start>=end){
        //don't do anything, chill !
        return ;
    }

    // Find the mid point of the array 
    var  mid  =    start + parseInt((end-start)/2);  // parseInt((start+end)/2);

    // sort the first half of the arry  :  mergeSort(arr, start, m) : Sorted s1 ( start -> m)
    mergeSort(arr, start, mid);

    // Sort the second half of the array : mergeSort(arr, m+1,end) : Sorted s2 ( m+1 -> end)
    mergeSort(arr,mid+1, end);

    // Merge the two sorted array into single sorted array
    merge(arr, start, mid, end);  // logic to merge   O(n)

}

/**
 * 
 * arr is sorted between start->mid
 * also sorted between mid+1 ->end
 * 
 * this will merge in manner whole array is sorted between start and end
 */
function merge(arr, start, mid , end){   // TC -> O(n) | SC -> O(n)

    //sorted start->mid and mid+1->end

    //Create a temp array of the same size as that of arr
    var tempArr = new Array(arr.length);  // Extra space
    var tempIndex = start; // this will be used to track the index in the temorary array

    var lStart = start; //starting index of left half

    var rStart = mid+1; //starting index of right half

    /**
     * Write the logic to insert elements in the tempArray in sorted order
     */
    while(lStart<=mid && rStart<=end){
        if(arr[lStart]<=arr[rStart]){ //element in left part is smaller than right part
             //put the element frm left into the tempArray
             tempArr[tempIndex] = arr[lStart];
             tempIndex++;
             lStart++;
        }else{
            //put the element from the right part into the tempArray
            tempArr[tempIndex] = arr[rStart];
            tempIndex++;
            rStart++;
        }
    }
    //If the elements are still left in the left array : lStart<=mid

    while(lStart<=mid){
        tempArr[tempIndex++]= arr[lStart++];
    }

    //If the elements are still left in the right array : rStat<=end

    while(rStart<=end){
        tempArr[tempIndex++] = arr[rStart++];
    }

    //tempArr will have all the numbers in the sorted order

    //Need to copy the numbers from tempArr to the original
    for(i=start;i<=end;i++){
        arr[i]=tempArr[i];
    }

}


/**
 * Find the inversions in an array
 */


function inversionCount(arr){

    //Write the logic to find the inversions
    // Bruteforce - O(n2)
    
    var countInversions = 0;
    for(i=0;i<arr.length-1;i++){
       for(j=i+1;j<arr.length;j++){
           if(i<j && arr[i]>arr[j]){
               //it's inversion
               countInversions++;
           }
       }
    }
    return countInversions;
}


function inversionCountEff(arr){
    
}


/** 
 * Quick Sort Algorithm
 * 
 * quickSort([5,4,1,2,6], 0 , 4)  -> [1,2,4,5,6]
 * 
 * quickSort([5,4,1,2,6],1,3)  ->   [5,1,2,4,6]
 * 
 * quickSort ([ 5, 4, 1, 2,6] ,0,2) -> [1,4,5,2,6]
 */


function quickSort(arr, start, end){
   
    //Base condition
    if(start>=end){
        return ;
    }

    //I need to find the pivotIndex
    /**
     * pivotIndex is an index, everything to the left of it will be lesser
     * and everything to the right of it will be bigger
     */
    var pi = findPivot(arr, start, end);

    //sort the arr for the index  start -> pi-1
    quickSort(arr, start, pi-1);

    //sort the array for the index pi+1 -> end
    quickSort(arr, pi+1, end);

}
/**
 * 
 * This function needs to re-arrange the array
 * and then find an index such that,
 * every element to the left of this will be smaller
 * and every element to the right of this index will be bigger
 * 
 * special index : pivot index
 * we need to return
 * 
 * 
 * Logic :
 * 1. Choose last element at the pivot element
 * 2. Re-arrange the whole array, so that, all the elements smaller
 * than the chose pivot element is to the left
 * and the elements bigger than the pivot element is to the right
 * 3.Index of the choose pivot element in the re-arranged array will be
 * the pivot index.
 */


function findPivot(arr, start, end){

    var pivot = arr[end];//last element is chosen as the pivot element

    var pI = start-1  ; //  [start,end] because at this point, we are not aware
    for( i=start;i<=end-1;i++){  //
           
        if(arr[i]<pivot){  // value at ith index is smaller than Pivot
            //ith element should lie to the left of the pivotIndex
            // pivotIndex should be to the right of i atleast
            pI++;  //confusing
            swap(arr,pI,i);  // pivot comes to the rigt side of this ith element -- confusing
        }
        // arr[i] was more than pivot...pivot should stay in left, so don't do anything
    
    }

    // pI+1 will be my pivot Index ... 
    //In pI+1, I need to set the pivot value which was at  end index
    swap(arr, pI+1, end);   // confusing

    return pI+1;
        
}

function randomizedfindPivot(arr, start, end){

    //random index
    var randomIndex = Math.floor(Math.random()*(end-start+1) +start);  // [start,end]
    
    //set the element at the random index to the end

    swap(arr, randomIndex, end);  // random element is now put at end

    var pivot = arr[end];//last element is chosen as the pivot element

    var pI = start-1  ; //  [start,end] because at this point, we are not aware
    for( i=start;i<=end-1;i++){  //
           
        if(arr[i]<pivot){  // value at ith index is smaller than Pivot
            //ith element should lie to the left of the pivotIndex
            // pivotIndex should be to the right of i atleast
            pI++;  //confusing
            swap(arr,pI,i);  // pivot comes to the rigt side of this ith element -- confusing
        }
        // arr[i] was more than pivot...pivot should stay in left, so don't do anything
    
    }

    // pI+1 will be my pivot Index ... 
    //In pI+1, I need to set the pivot value which was at  end index
    swap(arr, pI+1, end);   // confusing

    return pI+1;
        
}

function swap(arr, a, b){
    var temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}





start = 0 ;
end = 7 ;
console.log(Math.floor(Math.random()*(end-start+1) +start))


