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
	}
}