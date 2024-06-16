// let score: number | string = 33
// //now score type is either number or string.

// console.log(score);

// score = "55" //55 as string

// console.log(score);

// score = 300;

// console.log(score); 

function getData( id: number | string) {
    // id.toLowerCase();
    // id= id+2;
    //ts gives error as it takes id to be of a different type that 
    //is either string or number. Not one.
    //to use certain operations of types, we need to check type like:

    if (typeof id === "string") {
        id = id.toUpperCase(); //no error
    }else if(typeof id === "number") {
        id = id+2; //no error
    }

    console.log(id);
}

getData(3);

const data: (number | string)[] = [1, 2, 3, "wtf"];

data.map(data => console.log(data));

//other use cases of union:
let pie: 3.14 = 3.14;
//pie will not take anything except 3.14

let seat: "aisle" | "middle" | "window";
//seat cannot be assigned any other value
//except for the above asigned using union.
// seat = "func"; //wrong

export {};