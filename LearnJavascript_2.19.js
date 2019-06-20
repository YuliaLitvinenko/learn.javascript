//https://learn.javascript.ru/task/sum-to

//Задача:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.

//С использованием цикла

function countSum(n) {
  var sum = 1;

  for (i=1; i<n; i++) {
    sum += i;
    }
  return (sum);
}

countSum(n);

//С использованием рекурсии

function countSum(n) {
  if (n==1) {
  	return n;
  }
  else {
  	return n + countSum(n-1);
  };
};

countSum(n);

//С использованием формулы для суммы арифметической прогрессии

function countSum(n) {
	sum = ((1 + n)/2)*n;
	return sum;
};

countSum(n);


//https://learn.javascript.ru/task/factorial

function factorial(n) {
  
  result = 1;

  if (n==1) {
    return result;
    }
  else {
    result = n* factorial(n-1);
    return result;
    };
};

factorial(2);


//https://learn.javascript.ru/task/fibonacci-numbers

function fib(n) {

  if (n==1 || n==2) {
    sum=1;
    return sum;
  }
  else {
    sum = fib(n-2) + fib(n-1);
    return sum;
  }

};

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13









