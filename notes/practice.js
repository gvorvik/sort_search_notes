// const findMiddle = (num1, num2, num3) => {
//     let arrayToSort = [num1, num2, num3];
//     arrayToSort.sort();
//     return arrayToSort[1];
// }

// console.log(findMiddle(0, 5, 3));
// console.log(findMiddle(0, -5, 3));
// console.log(findMiddle(1, 2, 3));
// console.log(0.1 + 0.4 === 0.5);


// var middleCharacters = function(str) {
//     return str.slice(1, -1);
// };

// let stringNoEnds = (str) => {
//     return middleCharacters(str);
// }

// console.log(stringNoEnds('hello'));

// function XO(str) {
//     //code here
//     let xCount = 0;
//     let oCount = 0;
//     let strArray = str.split('');
    
//     for(let i = 0; i<strArray.length; i++) {
//         console.log(strArray[i])
//       if(strArray[i].toLowerCase() === 'x') {
//         xCount+=1;
//       } else if(strArray[i].toLowerCase() === 'o') {
//         oCount+=1;
//       }
//     }
//     console.log(xCount, oCount);
//     return xCount===oCount;
// }

// console.log(XO('xxxm'));

// function friend(friends){
//     //your code here
//     let myFriends = friends.filter(friend => friend.length === 4);
//     return myFriends;
//   }

//   console.log(friend(['alex', 'travis', 'brad', 'matt', 'jason']));

//   function disemvowel(str) {
//     let arr = str.split('');
//     let newString = arr.filter(letter => {
//         console.log(letter);
//       if(letter.toLowerCase() !== 'a' && letter.toLowerCase() !== 'e' && letter.toLowerCase() !== 'i' && letter.toLowerCase() !== 'o' && letter.toLowerCase() !== 'u') {
//         return letter
//       }
//     })
//     return newString.join('');
//   }

//   console.log(disemvowel('hello'));

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    if(typeof iterable === 'string') {
      iterable = iterable.split('');
    }
    let previousEl = '';
    let newArray = iterable.filter(el => {
      if(el !== previousEl) {
        previousEl = el;
         return el;
      }
    });
  return newArray;
  }

  console.log(uniqueInOrder('aabbbcc'));
  console.log(uniqueInOrder([1, 'b', 'b', 2, 'c']));