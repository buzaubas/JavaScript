//1
// const age = prompt("Ваш возраст?");
// if (age>0 && age<=2) {
//     alert("Вы ребенок");
// }
// else if (age >= 12 && age <= 18) {
//     alert("Вы подросток");
// }
// else if (age>=18 && age<=60) {
//     alert("Вы взрослый");
// }
// else if (age=> 60) {
//     alert("Вы пенсионер");
// }

//2
// const symbol = parseInt(prompt("Enter number->"));
// switch (symbol) {
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     default:
//         alert("Number not enterned");
//         break;
// }

//3
// const three_num = prompt("Enter threedigit number->");
// let one = parseInt(three_num) %10;
// let two = Math.trunc((parseInt(three_num) % 100)/10);
// let three = Math.trunc(parseInt(three_num)/100);
// if (one == two || one == three || two==three) {
//     alert("Similar digits");
// } else {
//     alert("No similar digits");
// }

//4
// const vis_year = parseInt(prompt("Enter year->"));
// if ((vis_year % 400 == 0) || ((vis_year % 4 == 0) && (vis_year % 100 != 0))) {
//     alert("Visokosnyy");
// } else {
//     alert("Ne viskoksnyy");
// }

//5
// var str = prompt ('Введите любое натуральное число', '');
// var j = 0, le = str.length - 1, pal = true;
// while (j <= le - j) { pal = pal && (str.charAt (j) == str.charAt (le - j)); j++}
// alert ('Введённое число ' + str + (pal ? ' ' : ' не ') + 'является палиндромом');

//6
// var value = parseFloat(prompt("Enter->"));
// const currency = prompt("Enter currency:");
// currency.toLowerCase();
// if (currency == "eur") {
//     value *= 0.1;
// }
// else if (currency == "uan") {
//     value =  value * 1.8;
// }
// else if(currency == "azn"){
//     value*= 2.5;
// }

// alert(value);

//7
// const cost_in = parseInt(prompt("Enter=>"));
// var discount;
// var cost = cost_in;
// if(cost >= 200 && cost <= 300){
//     discount = 0.3;
// }
// else if (cost >= 300 && cost <= 500) {
//     discount = 0.5;
// }
// else if (cost > 500) {
//     discount = 0.7;
// }
// alert(cost-(cost*discount));

//8
// const round = parseFloat(prompt("Circle = "));
// const square = parseFloat(prompt("Square = "));
// var radius = round / (2*3.14);
// var back = square / 8;
// if (back > radius) {
//     alert("Can fit");
// } else {
//     alert("Can't fit");
// }

//9
// let score = 0;
// alert("4 * 4 = \n 1)1 \n 2)16 \n 3)5");
// let answer = prompt("Your answer->");
// if(answer == 2){
//     score++;
// }
// alert("0 * 44 = \n 1)0 \n 2)35 \n 3)555");
// answer = prompt("Your answer->");
// if(answer == 1){
//     score++;
// }
// alert("1 * 1 = \n 1)-1 \n 2)358 \n 3)1");
// answer = prompt("Your answer->");
// if(answer == 3){
//     score++;
// }
// alert("Your score:" + score);

//10
const Month =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let day, month, year;
day = parseInt(prompt("Enter day ->"));
month = parseInt(prompt("Enter month ->"));
year = parseInt(prompt("Enter year ->"));
if (day>Month[month-1]||month>12)
{
    alert("Error!");
}
if (day<Month[month-1]||(month==2&&year%4==0))
    day++;
else if (month==12&&day==31)
{
    year++;
    day=1;
    month=1;
}
else
{
    month++;
    day=1;
    }
alert(day + " " + month + " " + year);