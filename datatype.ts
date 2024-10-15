// Datatype : string, Number , Enum, Array, Tuple, Any, Void, Never, Boolean 

//String

let fname:string
fname = "Rishabh";
console.log(fname.toUpperCase());

//Number

let age:number
age = 20;
age = 30.5;
console.log(age);

//Typecasting

let dob="22"
let dobInt=parseInt(dob);
console.log(dobInt)

//Boolean

let isValid=true
console.log(isValid)

//Array

let empList:string[]
empList = ["abc", "1"]
console.log(empList)

//Enum

const enum Color {
    Red,
    Green,
    Blue
}

let c:Color=Color.Blue


//Tuple

let swapNumber:[number, number]
function swapNumbers(num1:number, num2:number):[number, number]{
    return[num2, num1];
}
let swap=swapNumbers(19,20)
console.log(swap)

// void 

function addNumber(num1:number, num2:number){
    return num1+num2;
}
console.log(addNumber(2,4))