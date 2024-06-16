type User = {
    readonly _id: string; //won't be able to change
    name: string;
    email: string;
    isActive: boolean;
    cred?: number;  //makes it optional
}

let myUser: User = {
    _id: "2323bibgf4h38f",
    name: "pragyan",
    email:"pragyanC@gmail.com",
    isActive: false
}

myUser.email= "ufb3"
// myUser._id = "foiew";
//cannot modify _id

//mixing of objects:
type cardNum = {
    cardnumber: string;
}
type cardExpDate = {
    expDate: string;
}
type cardDetails = cardNum & cardExpDate & {
    cvv: number;
}
//cardDetails has both the types of cardNum and cardExpDate and another one cvv



export {};