const user = {
    banks: [
        { adress: { city: 'qutaisi',} },
        { adress: { city: 'batumi' ,} },
        { adress: { city: 'tbilisi',} }
    ]  
}

console.log(citylog(user));

function citylog({banks:[,,{adress:{city}}]}){
    return city;
}
