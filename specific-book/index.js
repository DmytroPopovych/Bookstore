function display(data) {
    document.getElementById('display').innerHTML = data;
}

function toConsole(data){
    console.log(data);
}

function multiply(num1, num2, callbackFn){
    const result = num1*num2;
    callbackFn(result);
}

function filter(numbers, filterFn){
    let results = [];
    for(const number of numbers){
        if(filterFn(number)) {
            results.push(number);
        }
    }
    return results;
}

function isOdd(number){
    return number %2 != 0;
}

function isEven(number){
    return number %2 === 0;
}

function scary(name){
    document.getElementById('main').innerHTML = 'Boo! '+ name;
}

function showCurrentTime(){
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    document.getElementById('time').innerHTML = currentHours + ":" + currentMinutes +":"+currentSeconds;
}

multiply(7, 7, display);
multiply(7, 12, toConsole);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));

setTimeout(scary, 1000, 'John');
setInterval(showCurrentTime, 1000);

function loadCharacter(characterId, callback){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://rickandmortyapi.com/api/character/' + characterId);
    request.onload = function(){
        callback(request.response);
    };
    request.send();
}


loadCharacter(2, onCharacterLoad);