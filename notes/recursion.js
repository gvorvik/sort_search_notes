//Recursion Rules:
// Each recursive call should be on a smaller instance of the same problem, that is, a smaller subproblem.
// The recursive calls must eventually reach a base case, which is solved without further recursion.

let factorial = function(n) {
	// base case:
	if(n === 0) {
	    return 1;
    }
    
	// recursive case:
	return n * factorial(n-1);
}; 

console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));



//Recursion palindrome case

// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if(str.length===0 || str.length===1) {
        return true;
    }
    // base case #2
    if(firstCharacter(str)!==lastCharacter(str)){
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
};

console.log(isPalindrome('a'));
console.log(isPalindrome('greg'));
console.log(isPalindrome('motor'));
console.log(isPalindrome('level'));


//Recursion Power Example
const isEven = function(n) {
    return n % 2 === 0;
};

const isOdd = function(n) {
    return !isEven(n);
};

const power = function(x, n) {
    // base case
    if(n===0) {
        return 1;
    }else if(n < 0) {
        return 1 / power(x, -n);
    }else if(isOdd(n)) {
        return x*power(x, n-1);
    }else if(isEven(n)) {
        var y = power(x, (n/2));
        return y*y;
    }
};

console.log(power(2,3));
console.log(power(2,0));
console.log(power(2,4));
console.log(power(2,-4));
