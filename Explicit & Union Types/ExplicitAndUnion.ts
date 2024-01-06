// To explicitly make a variable only for string 
let a: string;
         // Now a can only assign value which is string.
         // It will never accept a value which is a number.


// in Array
let b:string[] = []
// here we can only push/add string on our array.
// the purpose of using [] as the value is because we can't push anything without assigning this value.


// if we want to add a string and number both in our array, we can use it such as, 
let c:(string | number)[] = []

c.push('sumit', 45)