function arrayManipulation() {
    
    const filterEvenNumbers = (arr) => {
        return arr.filter((num) => num % 2 ==0);
    }

    const sumOfArray = (arr) => {
        return arr.reduce((acc,el) => acc + el,0);
    }

    const sortAndConcat = (arr1,arr2) => {
        arr1.sort((a,b) => a-b);
        arr2.sort((a,b) => a-b);
        return arr1.concat(arr2);
    }
    return {
        filterEvenNumbers,
        sumOfArray,
        sortAndConcat
    }
}

const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [11,12,13,14,15,16,17,18,19,20];

const {filterEvenNumbers,
    sumOfArray, sortAndConcat 
     } = arrayManipulation()
    
console.log(filterEvenNumbers(arr1));
console.log(sumOfArray(arr1));

const arr3 = [10,9,8,7,6,5,4,3,2,1];
const arr4 = [20,19,18,17,16,15,14,13,12,11];
console.log(sortAndConcat(arr3,arr4));