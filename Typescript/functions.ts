
// function addTwo(num: number){
//     return "hello";
// }

// function addTwo(num: number): number{
//     return "hello";
// }

function addTwo(num: number): number{
    return num+2;
}
//so we can infer type of return of function


function getUpper(val: string){
    return val.toUpperCase();
}

function signUp( name: string, email: string, password: number){
    console.log(name + "\n" + email + "\n" + password);
}

let login = (isPaid: boolean, id: number, name = "pragyan") => {
    console.log(isPaid);
    console.log(id + "\n\n");
    return true;
}

// function getValue(val: number): boolean {
//     if(val > 5){
//         return true;
//     }
//     return "here this will show error as the return type is boolean.";

//     //vice versa happens when we infer return to be string, then 
//     //return true will give error.
//     //this type of situation might arrive
// }


const getHello = (number: string): boolean => {
    return true;
}

function consoleError(error: string): void {
    //void should be explicitly metioned.
    console.log(error);
}

function handleError(error: string): never {
    throw new Error(error);
    //never returns anything.

    //to make error handling more robust.
}

handleError("this is wrong");

signUp("pragyan", "pragyanc@gmail.com", 321412);
login(true, 23);
let result = addTwo(5);
let result2 = getUpper("pragyan");

console.log(result + "\n" + result2);


export {}