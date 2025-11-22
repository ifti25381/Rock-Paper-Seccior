/*

const nums = [10, 20, 30];
console.log(nums);
nums[2] = 99;
console.log(nums);
getlastvalue();


function getlastvalue() {
  const lastIndex = nums.length - 2;
  const lastValue = nums[lastIndex];
  console.log(lastValue);
}


function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

// Examples:
console.log(getLastValue([1, 20, 22, 24, 5]));     // 5
console.log(getLastValue(['hi', 'hello', 'good'])); // 'good'

function arraySwap (array){
  const firstValue = array[0];
  const lastValue = array[array.length - 1];
  array[0] = lastValue;
  array[array.length - 1] = firstValue;
  return array;
}
// Examples:
console.log(arraySwap([1, 2, 3, 4]));      // [4, 2, 3, 1]
console.log(arraySwap(['a', 'b', 'c']));   // ['c', 'b', 'a']

//11d. creating a loop that counts up to 2 to 10
for (let i = 2; i <= 10; i+=2) {
  console.log(i);
}

//11e. creating a loop that counts down from 5 to 0
for (let i = 5; i >= 0; i-=1) {
  console.log(i);
}

//11f. doing 11d and 11e with while loops
let f = 2;
while (f <= 10) {
  console.log(f);
  f += 2;
}
let j =5;
while (j >= 0) {
  console.log(j);
  j -= 1;
}


//11g Creaing a loop that takes an array of numbers and creates a new aray where each number is increased by 1
const number = [1, 2, 3];
let newArray = [];
for (i = 0; i < number.length; i+=1) {
  newArray.push(number[i] + 1);
}
console.log(newArray);

// 11h creaig a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.
function addOne(array) {
  let newArray = [];
  for (i = 0; i < array.length; i+=1) {
    newArray.push(array[i] + 1);
  }
  return newArray;
}
// Examples:
console.log(addOne([1, 2, 3]));       // [2, 3, 4]
console.log(addOne([-2, -1, 0, 99]));    // [-1, 0, 1, 100]

// 11i. creating a function addNum(array, num) that takes an array of numbers and returns an array where each numbers is increased by 'num'.
function addNum(array, num) {
  let newArray = [];
  for (i = 0; i < array.length; i+=1) {
    newArray.push(array[i] + num);
  }
  return newArray;
}
// Examples:
console.log(addNum([1, 2, 3], 3));        // [4, 5, 6]
console.log(addNum([1, 2, 3], 2));        // [3, 4, 5]

// 11j. creating a function countPositve(nums) that takes an array of numbers and returns how many numbers in array are greater than zero.

function countPositive(nums) {
  let count = 0;
  for (i = 0; i < nums.length; i+=1) {
    if (nums[i] > 0) {
      count += 1;
    }
  }
  return count;
}
console.log(countPositive([-2, 3,4]));   // 3
*/

// Create a functio minMas(nums) that takes an array of numbers and returns an object with the mininum and maximum number arary. (do this using a aloop instead of using something like Math.min or Math.max)
function minMax(nums) {
  let min = nums[0];
  let max = nums[0];
  for (i = 1; i < nums.length; i+=1) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return { min, max };
}
// Examples:
console.log(minMax([3, 1, 4, 2]));      // { min: 1, max: 4 }
console.log(minMax([-7, 0, 10, 5]));    // { min: -7, max: 10 }


//11l. Now updateing exercise 11l to also handle these casese: minMax([]) should return null; minMax([3]) should return { min: 3, max: 3 }

function minMaxUpdated(nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return { min: nums[0], max: nums[0] };
  }
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i+=1) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return { min, max };
}
// Examples:
console.log(minMaxUpdated([]));               // null
console.log(minMaxUpdated([3]));              // { min: 3, max: 3 }
console.log(minMaxUpdated([3, 1, 4, 2]));     // { min: 1, max: 4 }
console.log(minMaxUpdated([-7, 0, 10, 5]));   // { min: -7, max: 10 } 

// 11n. creating a function countWords(words) that takes an array of strings and returns an object with how many times each string appears. for exaple countWords (['apple', 'banana', 'apple', 'graps', 'apple']) should return { apple: 2, banana: 1 }. to access this using a property of variable object[variableName];


function countWords(words) {
  let wordCount = {}; 
  for (let i = 0; i < words.length; i+=1) {
    const word = words[i];
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
// Example:
console.log(countWords(['apple', 'banana', 'apple', 'grape', 'apple']));  // { apple: 3, banana: 1, grape: 1 }
