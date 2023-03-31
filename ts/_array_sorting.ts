

function sorting(){

    let numbers:number[] = [10, 33, 1, 90, 23, 45, 76, 2, 35, 89, 66];
    let tempNum: number;

    for(let i=0; i<numbers.length; i++){
        for(let j = 0; j< numbers.length; i++){
           if(numbers[j] > numbers[j+1]){
            tempNum = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = tempNum;
            console.log(numbers);
           }
        }
    }
}
sorting()