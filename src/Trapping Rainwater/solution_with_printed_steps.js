const trappedRainwater = (arr) => {

    let totalWater = 0;
    let leftMax = arr[0];
    console.log(`Initial leftmax is: ${leftMax}`);
    let rightMax = arr[arr.length - 1];
    console.log(`Initial rightMAx is: ${rightMax}`);
    let leftIndex = 1;  // Note that I am not take in consideration the very first element and the very last element of array as they will never catch any water
    console.log(`Initial leftIndex is: ${leftIndex}`);
    let rightIndex = arr.length - 2;
    console.log(`Initial rightIndex is: ${rightIndex}`);

    while( leftIndex <= rightIndex ){

        if( leftMax <= rightMax ){
            if( arr[leftIndex] <= leftMax){

                console.log(`We are checking index ${leftIndex} that has value ${arr[leftIndex]} against leftMax that is ${leftMax}. Total Water will be increased by ${(leftMax - arr[leftIndex])}.`)

                totalWater += ( leftMax - arr[leftIndex]);
                leftIndex++;
                
                console.log(`The index moves to ${leftIndex++}`)
                
            }
            else{
                console.log(`Wall has been found at ${arr[leftIndex]}. Previous leftMax -> ${leftMax} was set to ${arr[leftIndex]}`)
                leftMax = arr[leftIndex];
                
            }
        }
        else{
            if( arr[rightIndex] <= rightMax){

                console.log(`We are checking index ${rightIndex} that has value ${arr[rightIndex]} against rightMax that is ${rightMax}. Total Water will be increased by ${(rightMax - arr[rightIndex])}`)


                totalWater += ( rightMax - arr[rightIndex]);
                rightIndex--;

                console.log(`The index moves to ${rightIndex}`)
            }
            else{
                console.log(`Wall has been found at ${arr[rightIndex]}. Previous leftMax -> ${rightMax} was set to ${arr[rightIndex]}`)

                rightMax = arr[rightIndex]
            }
        }
    }

    return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(trappedRainwater(testArray));

