// Using iteration, write a function fibs which takes a number 
// and returns an array containing that many numbers from the 
// fibonacci sequence. Using an example input of 8, this function 
// should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n) {
    if (n === 0) {
        return []
    } else if (n === 1) {
        return [0]
    }

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i -2]
        sequence.push(nextNumber)
    }
    return sequence;
}

// fibsRec(8) = [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
    //define a recursive function to get the nth fibonacci number

    function getFibonacci(n) {
        if(n === 0) {
            return 0
        } else if (n === 1) {
            return 1
        } else {
            return getFibonacci( n - 1) + getFibonacci(n - 2)
        }
    }

    let sequence = []

    for (let i = 0; i < n; i++) {
        sequence.push(getFibonacci(i))
    }

    return sequence
}

//take in an array, and return a sorted array
function mergeSort(arr) {

    //base case
    if (arr.length <= 1) {
        return arr;
    }

    //split the array into two halves
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    //recursively call merge sorrt on each half and merg them

    return merge(mergeSort(left), mergeSort(right))

    //create the merge function
    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        //compare each index of the two arrays 
        //adding the smallest to the result

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex])
                rightIndex++;
            }
        }

        // if there is any leftover in the left array, add it to result
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        return result;

    }

}

console.log(mergeSort([1, 4, 3, 5]))