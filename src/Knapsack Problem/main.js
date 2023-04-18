// This file contains a dynamic programming solutions to the classic 0/1 knapsack problem where are
// you are trying to maximize the total profit of items selected without exceeding the capacity of
//  your knapsack.


// Time Complexity: O(n * weights)
// Space Complexity: O(n * weights)

// @author - Lukas Michalek

const knapsackProblem = (weights, values, knapsackCapacity) => {

    // @param knapsackCapacity - the maximum capacity of the knapsack
    // @param weights - Array containing weights of all items
    // @param values - Array containing values of all items
    // @return - The maximum achievable profit of selecting a subset of the elements 
    //           such that the capacity of knapsack is not exceeded

    // First, lets handle edge cases:

    if( weights.length !== values.length || weights.length === 0 || values.length === 0 || knapsackCapacity < 0){

        // * Try to implement !values.length instead

        throw new Error("Invalid input provided!")
    }

    // Initialize the table(matrix) where Rows will represent items and Columns will represent the current size of knapsack(forom 0 up to knapsackCapacity)
    // Note, that I base this matrix on 1 instead of 0(instead of first index be 0 it will be 1)

    // the number of all items I have been given to iterate through(also number of rows will be allItems + 1 for easier counting and 0 will be basically empty element)
    const allItems = weights.length;
    console.log(`allItmes is ${allItems}`)

    

    // initialize matrix - The idea is to create 
    const knapsack = [];

    for ( let j = 0; j < allItems + 1; j++){
        knapsack[j] = [];
        for(let k = 0; k < knapsackCapacity + 1; k++){
            knapsack[j][k] = 0;
        }
    }

    // console.log(knapsack)
    
    // first loop creates row for item I am currently trying to get best value for and later nested loop will go through all different knapsack sizes and providing me with the best values possible for that weight -> See the matrix graph for better understanding.
    // Also note, that as stated above I have based my array on 1 instead of 0 and that is why I am starting with i = 1

    for( let i = 1; i <= allItems; i++){

        // Get the value and weight of the current item.
        // Note that we expect that same index in both arrays(weights and values) will correspond with same item
        // I am using [i-1] because the original arrays I was given in paramaters are based on index 0

        const value = values[i-1];
        const weight = weights[i-1];

        console.log(`Value of this item is ${value} and weight is ${weight}`)

        // I am staying in the same item row but checking the different sizes(0 - knapsackCapacity) and assigning the best value to that location. First it will be as the item would not be included and therefore I am using the last best value from row directly above, later I am comparing this value with the value if I was to include that item. If the value is better with the item it will get updated

        for(let size = 1; size <= knapsackCapacity; size++){

            // I am not considering this item, and therefore using the last best value without it given to the size.(note that with the first item it will of course be 0)

            knapsack[i][size] = knapsack[i-1][size];

            // console.log(`Now checking value of ${value} and weight of ${weight}`)
            // console.log(`Knapsack is ${knapsack}`)
            // console.log(`************`)

            // Now I am considering adding the item, which will give me value. If the value is larger I will update the best value.
            // Now, what this does is to put value from previous best value to that location. So let`s say item weight is 5 but I am at size 3 now, so it won`t fit, it won`t get to the if loop and previous best(from the previous row at the index directly above) is picked and value is used.
            // If let`s say I am at size 7, weight of item is 5 but still best I can do is 9(see the example in notebook) it will still be picked as if loop will fail

            // Further if loop explanation: 
            // size >= weight -> the weight needs to be at least of the size so the item can fit
            // knapsack[i-1][size - weight] + value -> Basically, I know now that the item will fit and so I can use its value. I might still have additional weight left [size - weight] and so I go up to the previous row and use the best value that was found at that size previously(from row above) and add it. If it is bigger than the best value without item added I will update the value at that location. This goes on until all items are checked for best value arriving at the last item with the knapsack capacity giving me the best possible value of al items. In other words, the value that is in the right down corner knapsack[allItems][knapsackCapacity] is the solution.

            if( size >= weight && knapsack[i - 1][size - weight] + value > knapsack[i][size]){
                knapsack[i][size] = knapsack[i-1][size-weight] + value;
            }
        }

    }

    console.log(`***************`)
    console.log(knapsack)

    // returns the vest value we can get out of the all items given the knapsack size(capacity)
    return knapsack[allItems][knapsackCapacity];


}

const knapsackCapacity = 7;
const weights = [1,3, 4, 5];
const values = [1, 4, 5, 7];

const solution = knapsackProblem(weights, values, knapsackCapacity);

console.log(solution);