//1
// let fnum = parseInt(prompt('Введите перое число->'));
// let lnum = parseInt(prompt('Введите второе число диапозона->'));

// let sum = 0;

// if (fnum <= lnum) {
//     for(fnum++; fnum != lnum; fnum++)
//     {
//         sum += fnum;
//     }
// } else{
//     alert('Error!');
// }

// alert("Сумма диапозона равнa " + sum);

//2
// let num1= parseInt(prompt('Введите перое число->'));
// let num2 = parseInt(prompt('Введите второе число->'));

// while ((num1 != 0) && (num2 != 0)) {
//     if (num1 > num2) {
//         num1 = num1%num2;
//     } else{
//         num2 = num2%num1;
//     }
// }
// alert(num1+num2);

//3
// let num = parseInt(prompt('Number:'));
// for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             console.log(i);
//         }
    
// }

//4
// let number = prompt('Number of digits->');
// alert(String(number).length);
// let digitsNumber = 0;
// while ((number/10) > 0) {
//     digitsNumber++;
// }

//5
// let arr = [];
// for(let i = 0; i < 10; i++)
// {
//     arr.push(parseInt(prompt('Enter->')));
// }
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let odd = 0;
// let even = 0;
// for(let i = 0; i < 10; i++)
// {
//     if(arr[i] == 0)
//     {
//         zero++;
//     } else if(arr[i] > 0)
//     {
//         positive++;
//         if(arr[i] % 2 == 0)
//         {
//             even++;
//         } else{
//             odd++;
//     }
//     } else if(arr[i] < 0)
//     {
//         negative++;
//         if(arr[i] % 2 == 0)
//         {
//             even++;
//         } else{
//             odd++;
//         }
//     }
// }
// alert("Positive: " + positive + " negative " + negative + " Zeros " + zero + " odds " + odd + " evens " + even);

//6
// function calculus (a, b, sign){
//     if(sign === '+') return a + b;
//     if(sign === '-') return a - b;
//     if(sign === '*') return a * b;
//     if(sign === '/') return a / b;
// }
// let _answer = 'yes';
//  while (_answer == 'yes'){
//     let _a = parseInt(prompt('First->'));
//     let _b = parseInt(prompt('Second->'));
//     let _sign = prompt('Sign->');
//     alert(calculus(_a, _b, _sign));
//     _answer = prompt('Again');
// }

//7
// let N = parseInt(prompt('Enter N:'));
// let K = parseInt(prompt('Enter K:'));

// let i;
// let a = [];
// for(i=0;i<N;i++)
// {
//     a[i] = parseInt(prompt('Enter numbers->'))
// }
// for(i=0;i<N;i++)
//     {
//         if (i>N-K) a[i]=0; else
//         a[i]=a[i+K];
//     }
// for(i=0;i<N;i++)
//     alert(a[i]);

//8
// const Month =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// let day, month, year;
// day = parseInt(prompt("Enter day ->"));
// month = parseInt(prompt("Enter month ->"));
// year = parseInt(prompt("Enter year ->"));

// let ans = 'ok';

// while (ans === 'ok') {
//     if (day>Month[month-1]||month>12)
// {
//     alert("Error!");
// }
// if (day<Month[month-1]||(month==2&&year%4==0))
//     day++;
// else if (month==12&&day==31)
// {
//     year++;
//     day=1;
//     month=1;
// }
// else
// {
//     month++;
//     day=1;
//     }
// alert(day + " " + month + " " + year);
// }

//9
// function table(num){
//     let res = 0;
//     for(let i = 1; i <= 10; i++)
//     {
//         res = num * i;
//         console.log(`${num} * ${i} = ${res}`);
//     }
// }
// for(let i = 2; i <= 9; i++)
// {
//     table(i);
//     console.log('---------------------------');
// }

//10
var num = parseInt(prompt("Введите число от 1 до 100"));
let ans;
let max = 100;
let min = 0;
let mid;

do{
    mid = (max+min)/2;
    alert(`Your number ${max}?`);
    ans = prompt('<, >, ==');
    if(ans === '<') max = mid;
    if(ans === '>') min = mid;
} while (ans == '==');

