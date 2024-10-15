//Named Function

console.log("Named Function")
function add(num1:number, num2:number):number{
    return num1+num2;
}
console.log(add(5,7));

//Arrow Function

console.log("Arrow Function")
const addNum = (num1: number, num2: number):number => num1+num2;
console.log(addNum(4,5));

//Function Expression

console.log("Function Expression")
const multiNum = function(num1:number, num2:number):number {
    return num1*num2;
}
console.log(multiNum(2,4));

//Optional Parameter

console.log("Optional Parameter")
function addOptional(num1:number, num2:number, num3?:number):number {
    return num3?num1 = num2+num3 : num1+num2;
}
console.log(addOptional(1,4,5));

//Required Parameter

console.log("Required Parameter")
function addRequired(num1:number, num2:number, num3=10):number {
    return num3?num1 = num2+num3 : num1+num2;
}
console.log(addRequired(1,5));

//Rest Parameter

console.log("Rest Parameter")
function addRest(num1:number, num2:number,...num3:number[]):number {
    return num1+num2+num3.reduce((a,b)=> a+b);
}
let numbers=[1,2,3];
console.log(addRest(1,2,...numbers));
console.log(addRest(1,2,2,4,5));
console.log(addRest(1,2,4,...[2,4,5]));

//Genric Function

console.log("Generic Function")
function getItems<Type>(items:Type[]):Type[] {
    return new Array<Type>().concat(items);
}
let numitems=getItems<number>([1,2,3,4]);
console.log(numitems);
let stringitem = getItems<string>(["a","b","c"]);
console.log(stringitem);