function numberRange(start, end){
    return new Array( end- start).fill().map((d, i) => i + start);
}





const sumAll = function(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number"){
        if (Math.sign(num1) == 1 && Math.sign(num2) == 1){
            if(num1 > num2){
                let maxNum = num1
                let minNum = num2
                let range = numberRange(minNum, (maxNum + 1))
                const sum = range.reduce((partialSum, a) => partialSum + a, 0);
                return sum
            }else if (num2 > num1){
                let maxNum = num2
                let minNum = num1
                let range = numberRange(minNum, (maxNum + 1))
                const sum = range.reduce((partialSum, a) => partialSum + a, 0);
                return sum
            }
            
        }else{
            return 'ERROR'
        }
    }else{
        return 'ERROR'
    }



};

// Do not edit below this line
module.exports = sumAll;
