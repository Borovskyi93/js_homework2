'use strict';

let firstNumber = Number(prompt('Введите первое число:'));
let secondNumber = Number(prompt('Введите второе число:'));
let plusResult = firstNumber + secondNumber;
let minusResult = firstNumber - secondNumber;
let multiplyResult = firstNumber * secondNumber;
let divResult = firstNumber / secondNumber;

console.log(`Результат: ${firstNumber}+${secondNumber}=${plusResult}`);
console.log(`Результат: ${firstNumber}-${secondNumber}=${minusResult}`);
console.log(`Результат: ${firstNumber}*${secondNumber}=${multiplyResult}`);
console.log(`Результат: ${firstNumber}/${secondNumber}=${divResult}`);