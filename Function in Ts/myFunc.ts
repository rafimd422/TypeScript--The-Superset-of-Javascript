
// Function types are void by Default

const myFunc = () => {
console.log("hello")
}

// We can define the type in Function

// The "function" is a reserved keyword in javascript. Thats why it is written with capitle letter in typescript. Such as, "Function"

const yFunc:Function = () => {
console.log("hello")
}

//Paramas of function

const func:Function = (a:string, b:string) => {
    console.log("hello")
    } // here we can only add string as the parameter.

// to set a parameter as optional,
const fun:Function = (a:string, b:string, c?:number) => {
    console.log("hello")
    } // the c parameter is optonal.

