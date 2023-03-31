let arr = [29, 0, 1, 56, 3, 43, 56, 23, 45];
let temp;


function reverseArray(arr, start, end){
    
   
    if(start <= end){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reverseArray(arr, start+1, end-1)
        console.log(arr)
    }
    
}
reverseArray(arr, 0, arr.length - 1)