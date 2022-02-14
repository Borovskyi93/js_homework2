'use strict';

let firstNumber = Number(prompt('Введите первое число:'));
let secondNumber = Number(prompt('Введите второе число:'));

function addNumber (addNumber = firstNumber + secondNumber) {
    console.log(`Результат: ${firstNumber}+${secondNumber}=${addNumber}`);
}

function subNumber (subNumber = firstNumber - secondNumber) {
    console.log(`Результат: ${firstNumber}-${secondNumber}=${subNumber}`);
}

function multNumber (multNumber = firstNumber * secondNumber) {
    console.log(`Результат: ${firstNumber}*${secondNumber}=${multNumber}`);
}

function devNumber (devNumber = firstNumber / secondNumber) {
    console.log(`Результат: ${firstNumber}/${secondNumber}=${devNumber}`);
}

addNumber();
subNumber();
multNumber();
devNumber();
