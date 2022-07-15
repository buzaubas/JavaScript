// const digitalMonth = parseInt(promt("Номер месяца"));
// let textMonth;

// switch (digitalMonth) {
//     case 1:
//         textMonth = "Январь";
//         break;
//     case 2:
//         textMonth = "Февраль";
//         break;
//     case 3:
//         textMonth = "Март";
//         break;
//     case 4:
//         textMonth = "Апрель";
//         break;
//     case 5:
//         textMonth = "Май";
//         break;
//     case 6:
//         textMonth = "Июнь";
//         break;
//     case 7:
//         textMonth = "Июль";
//         break;
//     case 8:
//         textMonth = "Август";
//         break;
//     case 9:
//         textMonth = "Сентябрь";
//         break;
//     case 10:
//         textMonth = "Октябрь";
//         break;
//     case 11:
//         textMonth = "Ноябрь";
//     case 12:
//         textMonth = "Декабрь";
//         break;    
//     default:
//         alert("Вы не ввели номер месяца");
//         break;
// }

// alert(textMonth);

// const number = parseInt(prompt('Четное или нечетное число'));
// alert(number % 2 === 0 ? number : number * 2);

// const hours = parseInt(prompt('Enter ->'));

// let stringName;

// if(hours < 6) stringName = 'Night';
// else if(hours > 6 && hours < 12) stringName = 'Day';

// alert(stringName);

// alert('message')

// const a_side = parseInt(prompt("Введите первую сторону ->"));
// const b_side = parseInt(prompt("Введите вторую сторону ->"));
// const c_side = parseInt(prompt("Введите третью сторону ->"));
// let P;

// if((a+b)>c && (b+c)>a && (a+c)>b)
// {
//     P = a + b + c;
// }
// else
// {
//     P = "Sorry it is not triangle";
// }

// alert('message')


// const number = prompt('Enter number -> ');
// let digit_1 = number[0];
// let digit_2 = number[1];
// let digit_3 = number[2];
// let digit_4 = number[3];

// console.log(digit_4);
// alert((digit_1 < digit_2 < digit_3 < digit_4) ? 'по возрастанию' : 'ytgjdjphfcnfyb2');

// const value = parseInt(prompt('Enter value -> '));
// const usd = 480.37;
// const rub = 8.35;
// const eur = 482.15;

// const arr = {usd, rub, eur};

// for (let index = 0; index < 3; index++) {
//     alert('$arr[]'+ (value * arr[index]));
// }

const time_promer_hours = prompt('Enter time -> ');
const time_promer_minutes = prompt('Enter time -> ')
const time_latter_hours = prompt('Enter mayyyyyyyyyybe time - > ');
const time_latter_minutes = prompt('Enter mayyyyyyyyyybe time - > ');

const time_latter = parseInt(+time_latter_hours)*60 + parseInt(+time_latter_minutes);
console.log(time_latter);
console.log(time_promer);
const time_promer = parseInt(+time_promer_hours)*60 + parseInt(+time_promer_minutes);

if(time_latter < time_promer){
    alert(mistake);
}
else{
    let difference = time_latter - time_promer;
    alert(difference);
}
