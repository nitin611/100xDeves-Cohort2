

function sum(a:number,b:number){
    return a+b;
}

const value=sum(3,2);
console.log(value);

// if-else-
// function isLegal(a:number):boolean{
//     if(a>18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let x:boolean=isLegal(18);

// create fun that take another fun as argument and run the other fun after 1 sec-
function runAfter(fn:()=>number){
    setTimeout(fn,1000)
}

runAfter(function(){
    console.log("hi there");
    return 1;
});

// -------------------------------------interface--
// with this interface we can pass type User to multiple places and dont have to write it multiple times-
interface User{
    firstName:"Nitin",
    lastName:"jha",
    age:20
}
function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}

function greet(user:User){
    console.log("Hi there"+user.firstName);
}

isLegal({
    firstName:"Nitin",
    lastName:"jha",
    age:20
})

// example where called function takes 2 argument and return a string -
function doSomething(cb2:(str:string, num:number)=>string):string{
    const x=cb2("2",2);
    return x;
}

// doing and ,or on both interface and type-

interface Techlead{
    name:string
}
type Manager={
    age:20
}
// if we want to do and ,or then we have to use type in that case
type Both=Techlead & Manager;