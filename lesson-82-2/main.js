// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. 
// Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [2, 15, 9, 78, 3, 16, 11, 14, 5, 7];

function moreNumber(numbersArray){
    for (let i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] > 10){
            console.log(numbersArray[i]);
        }
    }
}
moreNumber(numbers);
