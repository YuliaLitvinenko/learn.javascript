//https://learn.javascript.ru/task/rewrite-function-question-or

//Задача:
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
  };

age = prompt('Сколько тебе лет?', '');
checkAge(age);

//Решение:
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
  };

age = prompt('Сколько тебе лет?', '');
checkAge(age);



//https://learn.javascript.ru/task/min

function min(a,b) {
  if (a<b)
    return a;
  else
    return b;
}


console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));


//https://learn.javascript.ru/task/pow

var number = +prompt('Введи число', '');
var degree = +prompt('Введи степень', '');

function pow(number, degree) {
  var result = 1;
  
  if (degree == 1)
    result = number;
  else {
    for (i=1; i<=degree; i++) {
      result = result * number;
    };
  };
  return result;
};

console.log(pow(number, degree));





