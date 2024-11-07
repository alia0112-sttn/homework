
// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
const user = {
    alex: {
        age: 21,
        isStudent: true
    }
}
console.log(user.alex)

// 2) Создайте метод объекта, который в качестве аргумента будет 
// принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const greet = {
    john: {
        age: 16,
        isStudent: false,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

greet.john.sayHello('Tom')

// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
//  Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. 
//  Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. 
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

const simpleUser = [
    {
        name: 'John',
        age:16,
        isAdmin:false
    },
    {
        name: 'ALex',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Anna',
        age: 25,
        isAdmin: false
    },
    {
        name: 'Bob',
        age: 15,
        isAdmin: true
    },
    {
        name: 'Mark',
        age:40,
        isAdmin:false
    },
    {
        name: 'Tom',
        age: 18,
        isAdmin:true
    }
];

let nameNoAdmins = 0;
function countNonAdmin() {
    for (let i = 0; i < simpleUser.length; i++){
        if (simpleUser[i].isAdmin){
            nameNoAdmins++;
        }
    }
}
countNonAdmin();
console.log(`Простые пользователи: ${nameNoAdmins}`)


