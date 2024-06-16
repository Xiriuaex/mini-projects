
const createUser = ({ name: string, isPaid: boolean }) => {

}

// createUser({name: "pragyan", isPaid: false});

createUser({name: "pragyan", isPaid: false, email: "pragyanc@gmail.com"});
//We cannot pass more info than mentioned in the function definition.
//but oddness of ts:
let user = {
    name: "pragyan", 
    isPaid: false, 
    email: "pragyanc@gmail.com"
};
createUser(user);//now we can pass more info than fun def.



//Object returning object.
const createCourse = ({ name: string, price: boolean }): { name: string, price: boolean } => {
    return { name: string, price: boolean };
}


export {};