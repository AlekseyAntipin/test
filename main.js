//alert("Привет, мир!");

// var myMassege = "Сообщение";     //Сообщение.

//  var myNumber = 10.884;  // Номер, цыфры.

// var myString = "Привет Вася";  //Строчка. 

// var x, y, z;
// x = 5.2;
// y = "3.455";
// z = 7.4;

// rezult = x + parseFloat(y) + z; //parseFloat - делает из строк цифры. Будет 16.055
// document.write('<p><span style= "color:red">' + rezult + '</span></p>');



//Булевые значения (Логические значения).true (тру - истина), false(фолс) - ложь.

//var myBooleam = true;

//var myNull = null; // Переводится -  есть пустота, от слова ноль.

//var myUndefined = undefined; // значение отсутствует или неопределённый.

//Булевые значения.
// z = 6;
// q = 8;
// boolean = z <= q; // z меньше или равно q.
// document.write(boolean);

// z = 22;
// q = 8;
// boolean = z % q; // % 22/8= 16/8 = 2(забыли), остаток 6, ответ остаток 6. Это называется остаток при делении.
// document.write(boolean);

// var x = '3';
// var y = 4;
// var z = (x+y)*(y%x); //(34)*(1) 
// alert(++z); // Прибавилось 1+(++) Получилось 35

// var a = 2;
// var b = 3;
// var c = 5;
// var d = a+b; //2+3=5.
// var e = ++b; //+1=4
// var x = c%2; //1
// alert(d%e-x);//5%4=1-1=0.

// function add(x,y) {  
//     return x+y; //8
// }
// function sub(x,y) {  
//     return y-x; // 10?
// }
// function calc(x,y,fun) {  
//     return fun(x,y);
// }
// alert(calc(-1,9,sub));//10. системный вызов alert вызывает функцию calc в которую передаются параметры x=-1 y=9 fun=sub
//функция calc возвращает результат функции sub которая возвращает 9-(-1)=10




//ОБЪЕКТ.


// var object = {
// Name: 'Вася',
// Year: 25
//};    // Обьект.




// ЧИСЛА


// var result = 40 + 10; 
// alert(result);   //result - результат.
// result = result + 5;
// alert(result);
// document.write("<br />" + result); // Следующая строка + результат.

// var x = 2;
// var y = 5;
// document.write(x + " + " + y + " = " + (x + y));       // 2+5=7

// var newNumber1 = '5'; //Строки.
// var newNumber2 = '7'; //Строки.
// console.log(Number(newNumber1) + Number(newNumber2)); //Теперь стали цифры.


//Информация будет в фааербаг, в консоли.

// myNumber = myNumber + 1;// Изменение переменной. var myNumber = 11.884; - стало.

// myNumber /= 105;  // Поделилось и сохранилось в myNumber.
// console.log(myNumber);

// //- ОБЫЧНОЕ округление, есть в рус. шпаргалке. Будет 5.
// //- в большую сторону, есть в рус. шпаргалке. Тут будет 6.

// var newNumber = 2.437;
// //. + откругление делает.


//  //Информация будет в фааербаг, в консоли. result = 40 + 10;


// console.log(40+myNumber);   // myNumber = 10.453; Всё смотрим в консоли. Стало 50.453.
// console.log(40-myNumber);
// console.log(40*myNumber);
// console.log(40/myNumber);  



// myNumber = myNumber + 1;// Изменение переменной. var myNumber = 11.884; - стало.
// console.log(myNumber); // Проверяем изменения.
// myNumber *= 10;  //Изменение переменной на +10.Умножили.
// console.log(myNumber);  //Проверка.
// myNumber ++;  //Увеличение на 1.



// console.log(Math.round(5.45)); // Math - математика, округление - round - ОБЫЧНОЕ округление, есть в рус. шпаргалке.
// console.log(Math.ceil(5.45)); // Math округление.ceil - в большую сторону, есть в рус. шпаргалке.
// var newNumber = 2.437;
// console.log(newNumber.toFixed(1)); // toFixed (ту фиксд) , столько цифр будет после точки. 2.4 ответ (1 цифра после точки).




//СТРОКИ

// Соединение строк (+)
// toLowerCase -Всё маленькими буквами.
// toUpperCase - большими буквами.
// console.log(myString.toLowerCase());// LowerCase - маленькие буквы.
// console.log(newNumber + '40'); // Сложил 2.43740
// console.log(myString.toUpperCase()); // <Большими буквами.

// document.write (Math.PI + '<br>'); // 3.141592653589793, перенос строки.
// document.write ('Результат ', newNumber + 43); // Результат 45.437


//МАССИВЫ
//  var names = ["Вася", "Петя", "Женя"];    
// console.log(names[0].toUpperCase());  //Будет 0 это "ВАСЯ", 1-Петя.
// names[0] = 'Маша'; //Поменяли 0 элемент Вася на Маша.
// console.log(names[0].toUpperCase());
// names.push("Света");       // Добавляем в элемент в конец массива. У Светы номер 3. Push- добавить.
// console.log(names[3]); //В консоли тут под номером 3 теперь Света.    

// let arr = [1, 2, 3, 4, 5];

// arr.pop(); // Удаляет последний элемент массива, стало 1,2,3,4.
// arr.push('5');// Добавили "5" в конец массива.
// arr.shift();// Удаляет 1 элемент из массива.
// arr.unshift('1');// Добавляет 1 элемент массива.
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // Перебираем длинну массива.
    
// }

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key); // Перебор значений.
    
// }

// let ans = prompt('', ''),
//     arr = []// С помощью этого выводится конанда алерта в браузере и то что туда ввести будет выведено в консоли и добавится в массив.

// arr = ans.split(',');
// console.log(arr);

// let arr = ['sdfds', 'zzz', 'add'],
//     i = arr.join(); // join(соединить) - всё соединяет в 1 строxre без пробелов.
// console.log(i);

// let soldier = {
//     health: 400,
//     armor: 100
// };
// // Будет  health: 100 и 100(не нашёл в Джоне armor и пошёл в soldier, так как он прототив soldier и там уже нашёл armor 100).
// let john = {
//     health: 100
// };
// ООП
// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);








// УСЛОВИЯ

// var a,b,c,z;

// a = 1;
// b = 2;
// c = 3;

// if (a != b) {
//     if (a != c) {
//        alert('Истинна');
//     }   
// } 
// else {
//     alert('Ложь');
// }
// true
// false

// if (a == b) {
//     alert('a = b');
// }
// else if (a == c) {
//     alert('a = c');
// }
// else if (b == c) {
//     alert('b = c');
// }
// else {
//     alert('Не равно');
// }

// if (a <= b) {
//     alert('a <= b');
// }
// else if (a > c) {
//     alert('a = c');
// }
// else if (b < c) {
//     alert('b = c');
// }
// else {
//     alert('Нет ответа');
// }

// if (a < b && b < c || a > c) {// || - сверху интера + shift. Переводится как ИЛИ.
//     alert('a <|| b');
// }
// else if (a > c) {
//     alert('a = c');
// }
// else if (b > c) {
//     alert('b < c');
// }
// else {
//     alert('Нет ответа');
// }


// z = (a > b) ? true : false;
// alert(z); // Называется Тернарный оператор (3).

// var a = 12;

// switch (a) { // Оператор свитч.
//     case null: // Кейс.
//         alert ('null');

//         break;
//     case 'string':
//         alert('string');
//         break;
//     case 20:
//         alert(20);
//         break;
//     case 12:
//         alert(12);
//         document.write(12);// Кавычки видит. 12 и '12' разное.
//         break;
//     default: 
//         alert('default');
//         break;
// }



//ИНКРЕМЕНТ.i++

// var i = 1;
// i++;    // Добавил +1. Бывает ++i
// alert(i); // Вывел 2.

// var i = '10';
// var b = -i;
// alert(typeof(b));// typeof - числовой тип данных.
// alert(b); // -10



// var test, result;
// var type;

// test = null;
// type = typeof(test);

// if (type == 'number') {
//     result = 'В переменной тест содержится число, увеличенное значение числа - ' +  (++test);
// }
// else if (type == 'string') {
//     result = 'Переменная test содержит в себе  строку - ' + test;
// }

// else {
//     result = 'В переменной тест ничего не записано.';
// }

// document.write("<p>" + result + "</p>");


// var date = 18;
// var e_m, res, last_n;

// e_m = 31 - date;

// if (e_m < 0) {
//     alert('Введена не корректная дата');
// }

// res = String(e_m);
// last_n = res [res.length-1]; //length ленс - "длинна" массива.Начиная с 0,1,2... Тут возвратит второе число.
// if (e_m > 4 && e_m < 21) {
//     e_m = e_m + ' дней';
// }
// else if (last_n == 1 ) {
//     e_m = e_m + ' день';
// }
// else if (last_n == 2 || last_n == 3 || last_n == 4) {
//     e_m = e_m + ' дня';
// }
// else {
//     e_m = e_m + 'дней';
// }

// document.write("<h2> До конца месяца осталось - " + e_m + "</h2>");

// if (6 <= 5){  //Тут не выполнилось.
//     console.log("Условие выполнилось")
// }
// if ('бум' == 'бум'){// == Так проверяем равно ли это, тут равно.
//     console.log("Условие выполнилось")
// }
// if ('5' == 5){ //==  равенство, тут выполнилось, это исключение.
//     console.log("Условие выполнилось")
// }
// if ('5' === 5){ //=== строгое равенство, тут не выполнилось.
//     console.log("Условие выполнилось")
// }
// if ("Вася" != "Петя") { // != это не равно.!-не.Оператор не смотрит на типы.Тут выполнилось.
//     console.log("Условие выполнилось")
// }
// if ("Вася" !== "Петя") { // !== это строго не равно.!-не.Оператор уже смотрит на типы.Тут выполнилось.
//     console.log("Условие выполнилось")
// }

//  if ("Вася" !== "Петя" && myNumber < 20) { // && - И. Условие выполнилось.
//      console.log("Условие выполнилось")
//  }
//  if ("Вася" !== "Петя" && myNumber > 20) { // && - И. Условие не выполнилось.
//     console.log("Условие выполнилось")
// }
// if ("Вася" !== "Петя" || myNumber > 20) { // || - Или. Выполнится, даже если верно всего-лишь 1 условие.
//     console.log("Условие выполнилось")

//     if (myNumber < 20) {
//  	console.log("Число меньше 20") 
//  } else {                           // else -или, проверить!!!!
// 	console.log("Число больше 20")
//  }                          

//let nam = 50;
// if (nam < 49) {
//     console.log("Неверно!");
// } else if (nam > 100) {
//     console.log("Слишком много!");
// } else {
//     console.log("Верно!");
// }

//(nam == 50) ? console.log('Верно') : console.log('Неверно');



//ЦИКЛЫ.

// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         break; // break - остановка, будет 0-4.
//     }
//     console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue; // continue - теперь 5 не будет в проверке.
//     }
//     console.log(i);
// }

// for (var j = 0; j < names.length; j++) {
//     // тут j - 0(это старт), а в names 3 имени и далее пишем прибавлять по 1(j++). И будет 3 имени.length(ленс) - длинна массива names.От 0 до names будет 3 имени.
//     console.log(names[j]);
// }


// var i = 0;
// while (i < 10) { // это аналог фикла for, тут тоже вывелось 0-9. Всегда создавать конечные цыклы.
//     console.log(i);
//     i++;
// }

// var i = 200;
// while (i >= 10) { // это аналог фикла for, тут тоже вывелось 200, 100, 50, 25, 12.5
//     console.log(i);
//     i /= 2;
// }




// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++; // будет 50,51,52,53,54.
// }

// for (let i = 1; i < 8; i++) {  //Не создавать бесконечный цикл, это ошибка, программа провиснет.
//     if (i == 6) {// Будет 1-5 
//         break    //Если заменить на continue, то будет 1,2,3,4,5  ,7.
//     }
//     console.log(i)
// }


//alert([ ] + 1 + 2);  // Почему будет 12?
//console.log(2 && 1 && null && 0 && undefined); //Почему ответ null?
//console.log(!!( a && b ) и (a && b)); // !! что обозначает?
//alert( null || 2 && 3 || 4 ); //  И почему 3????????
//alert( +"Infinity" ); // Надпись Infinity
//alert("ёжик" > "яблоко"); //Почему true???
//Чему равно 0 || "" || 2 || undefined || true || falsе ?






// ФУНКЦИИ !!!!!!!!!!!!!!!! Очень важно. 

//   function sum(x, y) {    // function- ФУНКЦИИ, типо ящика. x,y - имена, они могут быть любые.
//   	console.log(x + y);   // писать +
// }
// sum(10, 59);   // Вызов функции (sum), sum- название функции.                     


//  function sum(x, y) {          
//      return x + y;  // return - возвратили, теперь можно повторять! 
// }
// var result = sum(10, 59);
// console.log(result);
// // или console.log(sum(10, 59)); Можно и так.
// console.log(sum(70, 43));
// console.log(sum(49, 59));

// var sum = 0;
// for (i = 4; i < 8; i++) { //4-7. Цифра 6 выпала. 
//     if(i == 6){//+4+5+7 = 16.
//        continue 
//     }
//     sum += i;
// }
// document.write(sum);  // Будет 16.  4+5+7=16+0=16.



// function showMessage(text) {
//     alert(text);

// }

// showMessage('Hello World!');

// Мини калькулятор
// function calc(a, b) {
//   return (a + b);
// }



// function retVar(params) {
//   let num = 50;
//   return num;
// }

// let avtoVivod = retVar(); //Вывели переменную let num = 50; из функции, теперь её можно просмотреть.
// console.log(avtoVivod);


// let calc = function (a, b) {
//   return (a + b);// тут переменную calc можно использовать в консоли только ПОСЛЕ самой функции.
// }

// let calc = (a,b) => {a+b}  // => это return
//  console.log(calc(3,4)); //Это новая функция.
//  console.log(calc(7,4));

// let str = 'test'; // length - длинна, будет 4, в тесте 4 буквы.
// console.log(str.length);

// console.log(str.toUpperCase); // Большие буквы.
// console.log(str.LowerCase); // Маленькие буквы.







//ОБЪЕКТЫ

// var myObject = {    // myObject- объект.
// 	name: "Вася",   
// 	surname: "Васин",
// 	age: 25, //Возраст.
// 	getFullName: function() {  // get - МЕТОД полного имени.
// //getFullName – соединяем объекты в объекте.
// 		return this.name + " " + this.surname;    //  вызов этого имени, + пробел +  этой фамилии.
// 	}
// };

// myObject.name = "Петя";                      //  Поменяли  имя в  //myObject.name с Васи на Петю.
// console.log(myObject.name);                         // Вызвали в консоли //Петю.
// console.log(myObject.getFullName()); // Вызвали в консоли Петю пробел и //Васина.Петя Васин.

// var apple = new Object ();
// apple.color = 'green';
// apple.shape = 'round';
// console.log(apple.color);

// let money = prompt("Ваш бюджет на месяц?"),
//     time = prompt("Введите дату в формате YYYY-MM-DD");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false,
// };

// let options = {
//     widtf: 1024,
//     height: 1024,
//     name: 'test'
// };

// console.log(options.name);// Будет test.
// options.bool = false; // Добавили в объект булиновое значение false.
// options.colors = { //Добавили объект в объект.
//     border: 'black',
//     bg: 'red'
// };

// console.log(options);

// delete options.bool  // Удалили bool

// console.log(options);// Удалили bool

// for (let key in options) {//Узнаём всё что содержится в объекте options.
//     console.log('Свойвство ' + key + ' имеет значение ' + options[key]);
// }
// Метод!!!!
// let box = document.getElementById('box');// Мы взяли объект документ, использовали метод - get - получение элемента по id и записали в скобках  название идентификатора.



// Скрипты и время их выполнения.

// let timerId = setTimeout(sayHallo, 3000); // setTimeout - запуск скрипта через определённое время.
// clearTimeout(timerId); // Остановил скрипт.

// let timerId = setInterval(sayHallo, 3000); //setInterval - повторяется через каждые 3 секунды.
// //clearTimeout(timerId);

// function sayHallo() {
//     console.log('Hello World');
// }

let timerId = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 2000);// Рекурсивный вызов(повторение.)
})