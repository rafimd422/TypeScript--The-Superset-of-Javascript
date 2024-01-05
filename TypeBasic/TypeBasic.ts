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

