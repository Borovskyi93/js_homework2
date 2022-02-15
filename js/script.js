'use strict';

const firstNumber = Number(prompt('Введите первое число:'));
const secondNumber = Number(prompt('Введите второе число:'));

function addNumber () {
    const addNumber = firstNumber + secondNumber;
    console.log(`Результат: ${firstNumber}+${secondNumber}=${addNumber}`);
}

function subNumber () {
    const subNumber = firstNumber - secondNumber;
    console.log(`Результат: ${firstNumber}-${secondNumber}=${subNumber}`);
}

function multNumber () {
    const multNumber = firstNumber * secondNumber;
    console.log(`Результат: ${firstNumber}*${secondNumber}=${multNumber}`);
}

function devNumber () {
    const devNumber = firstNumber / secondNumber;
    console.log(`Результат: ${firstNumber}/${secondNumber}=${devNumber}`);
}

addNumber();
subNumber();
multNumber();
devNumber();
