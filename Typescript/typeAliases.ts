type User = {
    name: string;
    email: string;
    isActive: boolean;
}//creating a new type User

function createUser(user: User): User { //parameter is of type User and return type is also User
    return {name: "pragyan", email: "bub@mail.com", isActive: true};    
}

console.log(createUser({ name: "", email: "", isActive: true}))

//all the values of the object must be passed.


export {};