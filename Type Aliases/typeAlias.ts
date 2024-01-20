// the type keyword use for store our variable/params types.


type stringOrNum = string | number;
type userType = {name:string, age:number};

const userDetails = (id:stringOrNum , user: userType) => {
    console.log("something")
}
