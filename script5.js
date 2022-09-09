function power(num, index){
    if(index == 1){
        return num;
    }
    else if (index == 0) {
        return 1;
    }
    else{
        return num*power(num, index-1);
    }
}

function NOD(a, b)
{
    if(a == 0 || b == 0){
        return a+b;
    }
    else{
        if (a > b) {
            return NOD(a-b, b);
        }
        else{
            return NOD(a, b-a);
        }
    }
}

function MAX(num){
    if (num < 0) alert('Positive is expected');
    if (num < 10) return num;
    return Math.max(num % 10, MAX(parseInt(num / 10)));
}

function natural(n, k=2)
{
    if (n < 2)
        return false;
    else if (n == k)
        return true;
    else if (n % k)
        return natural(n, k + 1);
    else
        return false;
}

// function factor(n, k=2){
//     if (n < 2)
//         return;
//     else if (n == k){
//         console.log(k)
//         return;
//     }
//     else if (n % k)
//         return factor(n, k + 1);
//     else{
//         console.log(k);
//         return;
//     }
// }

function factors(a, arr = [], b = 2) {
  if (b > Math.sqrt(a)) {
    arr.push(a);
    return arr;
  } else if (a % b == 0) {
    arr.push(b);
    factors(a / b, arr, b);
  } else {
    factors(a, arr, ++b);
  }
  return arr.join("*");
}

function fibonacci(i){
    if(i == 0){
        return 1;
    } else if(i == 1 || i == 2){
        return 1;
    }
    else{
        return fibonacci(i-1)+fibonacci(i-2);
    }
}


console.log(power(8, 2));
console.log(NOD(5, 8));
console.log(MAX(546));
console.log(natural(8));
console.log(natural(7));
console.log(factors(18));
console.log(fibonacci(6));