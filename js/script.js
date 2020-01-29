var name = prompt('Введите Имя')

function year () {
    var num1 = +prompt('Введите сегодняшний год');
    var num2 = +prompt('Введите год рождения');
    let year = num1 - num2;
    return year;
}
console.log('Имя ' + name + ', ' + 'Ваш возраст ' + year());




//Задание 2
function sign(min1, max1) {
    return Math.floor(Math.random() * (max1+1 - min1) + min1);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var number = prompt ('Введите количество примеров')
let userNum1 = +prompt ('Введите min число');
let userNum2 = +prompt ('Введите max число');
for (let i = 0; i<number ; i++) {
    let randomNum1 = random(userNum1, userNum2);
    let randomNum2 = random(userNum1, userNum2);
    let sign1 = sign(1,4);
    if(sign1 == 1){
        let userAnswer = +prompt(randomNum1 + ' + ' + randomNum2);
        if ((randomNum1 + randomNum2) == userAnswer) {
            console.log('Ваш ответ верный - ' + userAnswer);
        }
        else {
            userAnswer = randomNum1 + randomNum2;
            console.log('Ваш ответ неверный, правильный ответ ' + userAnswer);            
        }    
    }
    else if(sign1 == 2){
        let userAnswer = +prompt(randomNum1 + ' - ' + randomNum2);
        if ((randomNum1 - randomNum2) == userAnswer) {
            console.log('Ваш ответ верный - ' + userAnswer);
        }
        else {
            userAnswer = randomNum1 - randomNum2;
            console.log('Ваш ответ неверный, правильный ответ ' + userAnswer);            
        }  
    }
    else if(sign1 == 3){
        let userAnswer = +prompt(randomNum1 + ' / ' + randomNum2);
        if ((randomNum1 / randomNum2) == userAnswer) {
            console.log('Ваш ответ верный - ' + userAnswer);
        }
        else {
            userAnswer = randomNum1 / randomNum2;
            console.log('Ваш ответ неверный, правильный ответ ' + userAnswer);            
        }  
    }
    else if(sign1 == 4){
        let userAnswer = +prompt(randomNum1 + ' * ' + randomNum2);
        if ((randomNum1 * randomNum2) == userAnswer) {
            console.log('Ваш ответ верный - ' + userAnswer);
        }
        else {
            userAnswer = randomNum1 * randomNum2;
            console.log('Ваш ответ неверный, правильный ответ ' + userAnswer);            
        }  
    }   
}

