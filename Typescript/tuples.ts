
//to understand tuple:
//a tuple is a finite sequence or ordered list 
//of numbers or, more generally, mathematical objects, 
//which are called the elements of the tuple.

const tupleUser: (string | number)[] = [ 1, 'pragyan' ]
//this is fine but it's not ordered, like firt string then number in the array.

const tupleUser2: [string, number] = ["pragyan", 1];

// const tupleUser3: [string , number] = [1, "pragyan"]; //this is not allowed


//tuple restrict to have a order.

let rgb: [number, number, number] = [255, 123, 112];

export{};