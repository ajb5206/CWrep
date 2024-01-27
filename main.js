// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

function sumCubes(n){
	let total = 0;
	for (let i = 1; i <= n; i ++){
		total += (i * i * i);
	}
	return total;
}

// Task
// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

// Example
// For a = 1, b = 2 and n = 2, the output should be 8

// You will cast your first marble and get $2, after which the numbers will become 2 and 3. When you cast your second marble, the well will give you $6. Overall, you'll make $8. So, the output is 8.

function magicalWell(a, b, n) {
  let total = 0;
  for(let i = n; i > 0; i --){
		total += a * b;
		a += 1;
		b += 1;
	}
  return total;
}

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
	let evenTot = 0;
	let oddTot = 0;
	let numArray = str.split('').map((x) => Number(x))
	for(let i = 0; i < numArray.length; i ++){  
    if(numArray[i] % 2 == 0){
      evenTot += numArray[i]
    } else
      {
        oddTot += numArray[i]
      }
  }
	if(evenTot > oddTot){
    return "Even is greater than Odd"
  }else if(oddTot > evenTot){
    return"Odd is greater than Even"
  } else{
    return "Even and Odd are the same"
  }
}

//Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(...nums){
  for(let i = 1; i < nums.length; i ++){
		if(nums[0] % nums[i] != 0){
			return false;
		}
	}
	return true;
}

// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

//You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

function sumConsecutives(s){
	let finalArray = [];
	let count = 0;
	let j = 0;
	for(let i = 0; i < s.length; i ++)
	{
		if(s[i] == s[i + 1])
		{
			let multi = s[i]
			count = 1
			for(j = i; j<s.length; j ++)
			{
				if(s[j] == s[j + 1])
				{
					count ++
				}
				else 
				{
					break;
				}
			}
			i = j;
			finalArray.push(multi * count)
		}
		else
		{
			finalArray.push(s[i])
		}
	}
	return finalArray;
}

//console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))

// Count how often sign changes in array.
// const arr = [1, -3, -4, 0, 5];
// catchSignChange(arr) == 2;

function catchSignChange(arr) {
	let count = 0;
	for(let i = 0; i < arr.length; i ++){
		if(arr[i] < 0 && arr[i+1] >= 0)
      {
        count ++
      }
			else if (arr[i] >= 0 && arr[i+1] < 0)
      {
        count ++
      }
	}
	return count;
}

// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

function partsSums(ls){
	let finalLs = [];
	let arrLength = ls.length;
	if(arrLength == 0 || arrLength == 1){
		finalLs.push(0);
	}else {
		do {
			finalLs.push(ls.reduce((a, cv) => a + cv))
			ls.shift();
			arrLength --;
		} while (arrLength > 0)
		finalLs.push(0);
	}
	return finalLs;
}
//currently not performant 

// In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

// If there is an equal amount of bad and good actions, return 'naughty'

function whatListAmIOn(actions){
	let count = 0;
	for(let i = 0; i < actions.length; i ++)
	{
		if(actions[i][0] == 'b' || actions[i][0] == 'f' || actions[i][0] == 'k')
		{
			count --
		}
		else if(actions[i][0] == 'g' || actions[i][0] == 's' || actions[i][0] == 'n')
		{
			count ++
		}
	}
	if(count > 0){
		return "nice"
	}
	else{
		return "naughty"
	}
}

function whatListAmIOn(actions){
	const bad = actions.filter(s => ['b', 'f', 'k'].includes(s[0])).length;
	const good = actions.filter(s => ['g', 's', 'n'].includes(s[0])).length;
	return good > bad ? "nice" : "naughty";
}

//https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript

function doMath(string){
	//split given string
	let newArray = string.split(' ')
	// order each new element by its included letter and keep order if same letter
	// remove letter

	//implement rolling + - * / 
}

//https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

function maxProduct(numbers, size){
	
}