function sum(x,y,z){
    return x + y + z;
}
const numbers = [1, 2, 3];

console.log(`Soma:${sum(...numbers)}`);

function confereTamanho(...args) {
    console.log(`Tamanho:${args.length}`)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(1, 3, 5, 8)

const user = ({
    id: 1,
    username: "JDoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    },
},
    {
        id: 2,
        username: "JaneD",
        fullName: {
            firstName: "Jane",
            lastName:"Doe"
        },
}
)


function userId({ id }) {
    return console.log(id);
}
userId(user);
function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return console.log(`${first} ${last}`);
}


getFullName(user);