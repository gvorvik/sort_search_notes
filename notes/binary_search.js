let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

const loopSearch = (number) => {
    let guesses = 0;
    for(let i = 0; i < numberArray.length; i++) {
        guesses++;
        if(numberArray[i] === number) {
            return guesses;
        }
    }
}

const binarySearch = (arr, number) => {
    let guesses = 0;
    let min = 0;
    let max = arr.length - 1;
    let average = parseInt((max+min)/2);
    while(max>=min){
        guesses++;
        if(arr[average]===number) {
            return guesses
        } else if(arr[average]>number) {
            max=average-1;
            average = parseInt((max+min)/2);
        } else {
            min=average+1;
            average = parseInt((max+min)/2);
        }
        if (guesses === 31) {
            return guesses
        }
    }
    return -1;
}

console.log(loopSearch(17));
console.log(binarySearch(numberArray, 17));