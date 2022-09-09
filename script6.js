class Product {
    constructor(lable, number, isBuy){
        this.lable = lable;
        this.number = parseInt(number);
        this.isBuy = parseInt(isBuy);
    }
}

function notBought(arr = []){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].isBuy == 0){
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].isBuy != 0){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

function addProduct(item, arr=[]){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].lable == item.lable){
            arr[i].number++;
            return;
        }
    }
    arr.push(item);
}

function buyProduct(item, arr = []){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].isBuy == 0){
            arr[i].isBuy = 1;
            return;
        }
    }
}

let milk = new Product("Milk", 1, 0);
let apples = new Product("Apple", 5, 1);
let bread = new Product("Bread", 2, 0);
let butter = new Product("Butter", 3, 0);

let listProducts = [milk, apples, bread, butter];
notBought(listProducts);

let chocolate = new Product("Chocolate", 1, 0);
let dietMilk = new Product("Milk", 1, 0);
addProduct(chocolate, listProducts);
addProduct(dietMilk, listProducts);
console.log(listProducts);