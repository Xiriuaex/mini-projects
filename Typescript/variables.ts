
//String
let greetings: string = "hey pragyan";
//Number
let num: number = 4;

let num2 = 432;
//this is also right, as per ts can infer to the asigning value.

//Boolean
let isTrue: boolean = true;

//We can use the function related to that type.
let upr = greetings.toUpperCase();

console.log(upr + " " + num + "\nThis is " + isTrue);


//any keyword:
let hero; //here it is best to inferred as string.

function getHero() {
    return "thor";
}

hero = getHero(); //here hero is of type any that it can take any type of data.
//it cannot infer the value type as it don't know what kind of 
//data will be asigned to it


export {}