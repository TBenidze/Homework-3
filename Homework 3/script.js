const calculate = (...args) => {
    let num = [0 , 1]
    
    num[0]=args[0]+args[1];

    for (let i = 2; i <args.length; i++) {
        num[1] = args[i] * num[1]
    }
    return num;
}

console.log(calculate(3,4,6,5,2))