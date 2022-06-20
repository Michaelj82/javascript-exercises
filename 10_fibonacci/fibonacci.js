const fibonacci = function() {
    let num = Number(arguments[0]);
    if (num >= 0){
        let fibo = [];
        if (num <= 0) return 0;

        fibo[0] = 0
        fibo[1] = 1

        let sum = fibo[0] + fibo[1];

        for (let i = 2; i <= num; i++) {
            fibo[i] = fibo[i-1] + fibo[i-2];

        }
        return fibo[num]

    }else{
        return 'OOPS'
    }
        

};

// Do not edit below this line
module.exports = fibonacci;
