// Find out if the list of numbers contain Phytagoras Numbers.

const numberGenerator = (listSize) => {

    // lets listSize = 10

    if(isNaN(listSize)){
        return 'Input must be a number!'
    }
    
    const randomNumberList = [];

    while( listSize > 0 ){

        let randomNumber = Math.ceil(Math.random() * 10);

        randomNumberList.push(randomNumber);

        listSize--;
    }

    return randomNumberList;

}

const phytagorasChecker = (listOfNumbers) => {

    for(let i = 0; i < listOfNumbers.length; i++){
        for(let j = 0; j < listOfNumbers.length; j++){

            let result = Math.pow(listOfNumbers[i], 2) + Math.pow(listOfNumbers[j], 2);

            if(listOfNumbers.includes(Math.sqrt(result))){
                return console.log(`Numbers ${listOfNumbers[i]} and ${listOfNumbers[j]} gives ${result}. And ${Math.sqrt(result)} is in List of numbers`)
            }

        }

    }

    return console.log("List does not contain Phytagors Numbers");


}






const listToCheck = numberGenerator(6);

const list2 = [1, 2, 1, 3, 4, 5, 3]

console.log(list2   );

phytagorasChecker(list2);

// console.log(a);

