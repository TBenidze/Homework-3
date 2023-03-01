const user1 ={
    name:   'John',
    username: 'Jonh',
    adress: {
        city: 'Jon',
        country: 'Jhon',
    },
}

const userCopy = (info) =>{
 
const user2 = {
    ...info,
    adress: {
        ...info.adress,
        ...info.city
    },
}

return user2;
}

user2 = userCopy(user1)

console.log(user2)

