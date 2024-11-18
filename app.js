// 



primeArray = [10, 20, 11, 5, 8]
let max = primeArray[0];
let min = primeArray[0];
for(let i = 0; i< primeArray.length; i++){
    if(primeArray[i] > max){
        max = primeArray[i];
    }
    console.log(max);
}
for(let i = 0; i<primeArray.length; i++){
    if(primeArray[i] < min){
        min = primeArray[i];
    }
    console.log(min);
}
let sum = 0;
for(let i = 0; i< primeArray.length; i++){
    sum += primeArray[i];
}
console.log(sum);