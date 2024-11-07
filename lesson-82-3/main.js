// Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора.
//  При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и 
//  в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. 
//  Запишите результат выполнения функции в переменную и выведите в консоль. 
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function count(fNum, sNum, operator) {
    switch (operator) {
        case 'plus':
            return fNum + sNum;
        case 'minus':
            return fNum - sNum;
        case 'multiply':
            return fNum * sNum;
        case 'divide':
            return fNum / sNum;
        default:
            throw new Error('Некорректный оператор')
    }
}
let result = count(16, 8, 'plus');
console.log(result);
result = count(16, 8, 'minus');
console.log(result);
result = count(16, 8, 'multiply');
console.log(result);
result = count(16, 8, 'divide');
console.log(result);


