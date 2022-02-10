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
           if(arr[j]<arr[i]){
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