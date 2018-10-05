let animals = ['zebra', 'emu', 'elephant', 'ant', 'cat', 'dog', 'bird', 'alligator', 'giraffe', 'deer', 'lion'];
let numbers = [4,2,7,9,5,6,1,8,3];


const swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

const indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
};

const selectionSort = function(array) {
    var lowestItemIndex;
    for(var x = 0; x < array.length - 1; x++) {
        lowestItemIndex = indexOfMinimum(array, x);
        swap(array, x, lowestItemIndex);
    }
    return array;
};

// console.log(selectionSort(animals));
console.log(selectionSort(numbers));