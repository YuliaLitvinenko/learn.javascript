//https://learn.javascript.ru/task/for-even

for (i = 1; i <= 10; i++) {
  if (i%2 != 0) continue;
  console.log(i);
};


//https://learn.javascript.ru/task/replace-for-while

var i=0;
while (i<3) {
  alert( "номер " + i + "!" );
  i++;
};


//https://learn.javascript.ru/task/repeat-until-correct

for (i=0;;i++) {
  number = prompt('Введите число, большее 100', '');
   if (number>100) break;
};


//https://learn.javascript.ru/task/list-primes

prost: for (var i = 2; i <= 10; i++) {
  for (var j=2; j<=i-1; j++) {
    if (i % j == 0) continue prost;
  };
  console.log(i);
};