
interface Sd{
    name:string,
    age:number
}
function x(m:Sd):string{
    return "1";
}

// interfaces can be implemented by classes and types can only be used unions and intersections.
// Always use interfaces until u have to do uninons or intersections.