function compare(a, b){
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else if (a === b) {
        return 0;
    }
}

function factorial(a){
    if (a === 0) {
        return 1;
    }
    else if (a === 1) {
        return 1;
    }
    else{
        return a*factorial(a-1);
    }
}

function glue(a, b, c){
    return (a*100) + (b*10) + c;
}

function area(a, b=a){
    return a*b;
}

function isPerfect(num)
{
    let sum = 1;
 
    for( let divider = 2; divider <= num / 2; divider++ )
        if( num % divider == 0 )
            sum += divider;
 
    return sum == num;
}

function rangePerfect(min, max){
    for( let n = min; n <= max; n++ )
        if( isPerfect( n ) )
            console.log(n);
}

function showTime(h = 0, m = 0, s = 0){
    let hours = "";
    let minutes = "";
    let seconds = "";

    if (h == 0) {
        hours = '00';
    } else{
        hours = h;
    }

    if (m == 0) {
        minutes = '00';
    } else{
        minutes = m;
    }

    if (s == 0) {
        seconds = '00';
    } else{
        seconds = s;
    }

    console.log(String(`${hours}:${minutes}:${ seconds}`));
}

function inSeconds(h = 0, m = 0, s = 0){
    let time = (h * 3600) + (m * 60) + s;
    return time;
}

function fromSeconds(sec){
    let h = Math.trunc(sec / 3600);
    let m = Math.trunc((sec % 3600) / 60);
    let s = ((sec % 3600) % 60) + 1;
    showTime(h, m, s);
}

function timeDifference(h1 = 0, m1 = 0, s1 = 0, h2 = 0, m2 = 0, s2 = 0){
    let fTime = inSeconds(h1, m1, s1);
    let lTime = inSeconds(h2, m2, s2);

    let difference = 0;

    if(fTime > lTime){
        difference = fTime - lTime;
    }
    else if (fTime < lTime) {
        difference = lTime - fTime;
    }

    fromSeconds(difference);
}

console.log(compare(5, 5));
console.log(factorial(0));
console.log(glue(1, 4, 9));
console.log(area(5, 4));
console.log(area(5));
console.log(isPerfect(257));
rangePerfect(2, 100);
showTime(12);
console.log(inSeconds(12, 11, 7));
fromSeconds(43877);
timeDifference(12, 59, 11, 11, 44, 9);
