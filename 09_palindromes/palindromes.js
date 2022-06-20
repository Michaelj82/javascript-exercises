const palindromes = function () {
    function isLetter(letter){
        return letter.toLowerCase() != letter.toUpperCase();
    }

    let palindrome = ''

    for (let i = 0; i < arguments[0].length; i++){
        if (isLetter(arguments[0][i]) == true){
            let letter = arguments[0][i]
            letter = letter.toLowerCase()
            palindrome = palindrome.concat(letter)


        }else if (isLetter(arguments[0][i]) == false){
            continue
        }
        

    
    }
    
    let splitList = palindrome.split('');

    let reversed = splitList.reverse();

    let splitString = reversed.join('');

    if (splitString === palindrome){
        return true
    }else{
        return false
    }
    

};

// Do not edit below this line
module.exports = palindromes;
