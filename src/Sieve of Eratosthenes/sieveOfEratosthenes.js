const sieveOfEratosthenes = (numberCount) => {

	// Handle Edge Cases:
	if(numberCount <= 1){
		return [];
	}
	else if( isNaN(numberCount)){
		return "Array size must be a number!";
	}

  // I am deliberately making the size of array 1 bigger as I want to represent numbers as indices. And as a normal array start with index 0 I need to accomodate for that. Basically numbers are represented as indices(index 2 = 3rd item in array => will represent number 2 and it can be either True or False depending in the fact if it is Prime or not

  const output = new Array(numberCount + 1).fill(true); 


  // As the number 0 and 1 are not primes I will make them false and the first umber I am going to check will be 2 => (index 2)
  
  output[0] = false;
  output[1] = false; 

 
  for(let i = 2; i <= numberCount; i++){

	
	// the number I am currently at is Prime I need to make sure to go through array and all its multiple must be then set to false as it will not be Prime
	
	if(output[i] === true){		

		
		// I do not need to check the number itself but the first number will be its double(as that could not be Prime as well) and then I will carry on with adding the number as it will be multiple of that number until the end of array flagging it False
		
		for( let j = i * 2; j <= numberCount; j = j + i){

			
			// Every number found cannot be Prime and will be set to false
			output[j] = false;
		
		}
	
	}
  }
  
  	
	const primes = [];

	for(let k = 0; k < output.length; k++){
		
		if(output[k] === true){
			primes.push(k);
		}
	}
	
	return primes;
   
}



const test = sieveOfEratosthenes(52);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);

// Leave this line for testing:
module.exports = sieveOfEratosthenes;