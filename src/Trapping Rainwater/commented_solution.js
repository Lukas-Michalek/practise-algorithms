

const trappedRainwater = (arr) => {

    let totalWater = 0;
    let leftMax = arr[0];
    let rightMax = arr[arr.length - 1];
    let leftIndex = 1;  // Note that I do not take in consideration the very first element and the very last element of array as they will never catch any water
    let rightIndex = arr.length - 2;

    // While the two pointers have not yet met each other, so there are elements between them
    while( leftIndex <= rightIndex ){

        // if the left wall is smaller than the right wall we want to go from left to right as the amount of water will always be equal to the smaller wall from 2 of them(in this case the smaller is left one and so the maximal height of water in every part will be up to the height of this wall). In case they are equal it does not matter which side we choose.
        if( leftMax <= rightMax ){

            // if the value of current part of the array we are at is still smaller that the hoight of the left wall, it means we can trap some water there. The amount of water is the difference from the actual height of that part and left wall as that is the smaller wall then right wall
            if( arr[leftIndex] <= leftMax){

                totalWater += ( leftMax - arr[leftIndex]);
                leftIndex++;
                
                
            }

            // if hovewer, we found that the height of this location is higher than current wall, it means we have found a new wall and so the current leftMax will be updated to this value. It will be checked against the right wall value and if it is bigger we will change the direction from right to left as the right wall has become smaller than left and therefore the amount of water we will catch in each part of the array will not be bigger than rightMax
            else{
                leftMax = arr[leftIndex];
                
            }
        }

        // In this case the right wall is smaller than the left wall and we will go from right to left. It is very simillar to the previous case where left wall was smaller than right wall and we went from left to right
        else{
            if( arr[rightIndex] <= rightMax){

                totalWater += ( rightMax - arr[rightIndex]);
                rightIndex--;

            }
            else{

                rightMax = arr[rightIndex]
            }
        }
    }

    return totalWater;
}

const arr =  [4, 2, 1, 3, 0, 1, 2]

console.log(trappedRainwater(arr));