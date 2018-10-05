
//More efficient method for sorting arrays.

//breaks up arrays into subarrays using recursion and then merges them
var mergeSort = function(array, p, r) {
    
    if(p<r) {
        var q = Math.floor((p+r)/2);
        mergeSort(array, p, q);
        mergeSort(array, (q+1), r);
        merge(array, p, q, r);
    }

    return array;
};

//Merge the sorted subarrays!
let merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while(i<lowHalf.length && j<highHalf.length){
        if(lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            k++;
            i++;
        } else {
            array[k] = highHalf[j];
            k++;
            j++;
        }
    }
    
    while(i < lowHalf.length) {
        array[k] = lowHalf[i];
        k++;
        i++;        
    }
    
    while(j < highHalf.length) {
        array[k] = highHalf[j];
        k++;
        j++;
    }
};

let sampleArray = [0,4,13,-21,-56,-5,9,-6,108];

console.log(mergeSort(sampleArray, 0, sampleArray.length-1));