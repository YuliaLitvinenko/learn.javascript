//https://learn.javascript.ru/task/check-login

var login = prompt("Введите логин", "");

  if (login == null) {
  	alert("Вход отменен");
  }

  else if (login == "Админ") {
  	var password = prompt("Введите пароль", "");

  	  if (password == "Черный Властелин") {
  	    alert("Добро пожаловать!");
  	  }
  	  else if (password == null) {
  	  	alert("Вход отменен");
  	  }
  	  else {
  	  	alert("Пароль неверен");
  	  };
  	}

  else {
  	alert("Я вас не знаю");
  };


//https://learn.javascript.ru/task/rewrite-if-question  

a=4; b=1;
(a + b < 4) ? result = 'Мало' : result = 'Много';
alert(result);


//https://learn.javascript.ru/task/rewrite-if-else-question

var message = (login == 'Вася') ? message = 'Привет' : 
(login == 'Директор') ? message = 'Здравствуйте' : 
(login == '') ? message = 'Нет логина' : message = '';