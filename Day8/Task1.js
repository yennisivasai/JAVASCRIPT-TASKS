var arr = [23, 54, 67, 64, 46, 95, 98];
var evenSum = 0;
var oddSum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenSum += arr[i]; 
    } else {
        oddSum += arr[i]; 
    }
}

console.log(evenSum,"Even Sum:" );
console.log(oddSum,"Odd Sum:");