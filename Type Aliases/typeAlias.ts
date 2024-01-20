// the type keyword use for store our variable/params types.
// It is use to make custom types and use more then one variable/params

type stringOrNum = string | number;
type userType = {name:string, age:number};

const userDetails = (id:stringOrNum , user: userType) => {
    console.log("something")
}
