
const totalWeight = 6;
const weights = [1, 5, 7];
const values = [200, 350, 700];


const totalItems = weights.length   // 3

// const arr = new Array[rows][colummns]

// for easier manipultion I make the array +1 so I start from 1 instead of 0 that will be reserved for empty value, also as I am including 0 weight I need to use totalWeight + 1(so it will go 0,1,2,3,4,5,6 instead of just 1,2,3,4,5,6)

// MAtrix will look like this
// const knapsack = [
            //          [0,1,2,3,4,5,6,],
        //              [],
    //              ]
const knapsack = new Array[totalItems + 1][totalWeight + 1 ]  

for(let i = 1; i < (totalItems + 1); i++){

}