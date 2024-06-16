
// const heroes: string[] = [];

// heroes.push("spiderman", "batman", "superman");

// heroes.map((hero, id) => {
//     console.log(`hero no ${id}: ${hero}`);
// })

// another way of defining array:

// const heroesPower: Array<string> = [];

// heroesPower.push("spider like ability", "super strength", "genius", "superspeed", "flying");

// heroesPower.map(heroPower => console.log(heroPower));


//object types:

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [];

allUsers.push({name: "pragyan", isActive: true});
allUsers.push({name: "Harshit", isActive: false});

allUsers.map(user => console.log(user.name));


export {};