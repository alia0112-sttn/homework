// // 1) Создайте произвольный массив чисел. 
// Используя цикл for обойдите этот массив и выведите в консоль только четные числа.
// // 2) Создайте массив из всех цветов радуги. 
// Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, 
// но в обратном порядке, p.s. обратите внимание на индексы массивов и стартовую позицию для i.

// ====Дз===>
const numders = [1, 2, 3, 4, 5]

for(i = numders.length - 1; i >= 0;i--){
    console.log(numders[i])
}

const numder = [1, 22, 54, 9, 78, 3, 7, 69, 47, 15, 18]

for(a = 0; a < numder.length; a++){
    if(numder[a] % 2 === 0){
        console.log(numder[a])
    }
}

// =======

const color = ['Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой' , 'Синий' , 'Фиолетовый']

for(c = color.length - 1; c >= 0; c--){
    console.log(color[c])
}



