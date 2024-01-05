// one

let playerName = "Mashrafi"

console.log(playerName) // Output: Mashrafi

playerName = 34; // it is showing error because it already assume it as String. so, it will follow this type strictly.
console.log(playerName)

// It will only work when you declare and define a value at a time.




// two
let NameOfPlayer;

NameOfPlayer = 'Mashrafi'
NameOfPlayer = 34;

console.log(NameOfPlayer) // Output: 34
// Output is 34 Because it didn't declare and define the value of variable at a time.




// three
function multiply(a:number ,b:number){
    return a * b;
}
         // we can only set a number on the parameter. because we already set the type. and it only possible in typescript


// four [Array]
let fruits = ["apple", "banana", "orange"]
fruits.push(34) // it is showing error because we added only strings on our array. so it already assume this as string. so, it didn't number on it.


let mixed = ["apple", 34, true]
mixed.push(34) // it isn't returning error because in this array, already appears a string, number and boolean. but we cannot add any other types thing such as, object or else. we can only push a string, number and boolean.


// five [Object]
let person = {
    name: 'Mashrafi',
    age: 35,
    isCaptain:true,
};
// in this object if we want to change the value, we only can add the value which is match with the current value. such as, {person.name = "Shakib"} but we can't add like, {person.name = 10} <= this one will show error. 
