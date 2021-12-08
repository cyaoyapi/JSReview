const binarySearch = (arrayOfValues, researchedValue, minIndex, maxIndex) => {
    if(minIndex > maxIndex){
        return {
            found: false
        };
    }
    else{
        middleIndex = Math.floor((minIndex + maxIndex) / 2);
        if(researchedValue == arrayOfValues[middleIndex]){
            return {
                found: true,
                index: middleIndex
            };
        }else if(researchedValue > arrayOfValues[middleIndex]){
            return binarySearch(arrayOfValues, researchedValue, middleIndex + 1, maxIndex);
        }else{
            return binarySearch(arrayOfValues, researchedValue, minIndex, middleIndex - 1);
        }
    }
};

const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arrayOfNumber, 6, 0, 9))
console.log(binarySearch(arrayOfNumber, 15, 0, 9))