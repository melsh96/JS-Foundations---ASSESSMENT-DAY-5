/** 1. Calculate a product of any given 2 numbers
 * 
 Create a function product that receives any two numbers and calculates their product.
 *  */ 

 function product(x, y) {
    return x * y;
  }

/** 2. Find max of two numbers
 * 
 * Create a function named maxOfTwoNumbers that receives any two number as arguments. 
 * The function should compare two numbers and return the greater number.
 */

 function maxOfTwoNumbers(a, b) {
    if (a > b) return a;
    else return b;
  }

/** 3. Find max of three numbers
 * 
 * Create a function named maxOfThreeNumbers that receives any three numbers as arguments. 
 * The function should return the greatest number out of three numbers provided.
 */

 function maxOfThreeNumbers(a, b, c) {
    return Math.max(a, b, c);
  }

/** 4. Check if number is even
 * 
 * Create a function named isEven that receives a number as an argument. 
 * The function should check the number and return true if number is even or false if it's not.
 */

 function isEven(num) {
    if (num % 2 === 0) return true;
    else return false;
  }

/** 5. Calculate sum of an array of numbers
 * 
 * Create a function named sumArray that receives an array of numbers as an argument. 
 * The function should return the sum of all the numbers in the array.
 */

 function sumArray(numbers) {
    if (!numbers[0]) return 0;
    const sumOfNumbers = numbers.reduce((acc, current) => {
      return acc + current;
    })
    return sumOfNumbers;
  }

/** 6. Find max in an array of numbers (not sure)
 * 
 * Create a function named maxOfArray that receives an array of numbers as an argument. 
 * The function should return the greatest number out of the numbers provided in the array.
 */

 function maxOfArray(numbers) {
    if (numbers = []) return false;
    else return Math.max(...numbers);
   }

//CORRECTION :
   function maxOfArray(numbers) {
    if (numbers.length === 0) return false;
    return Math.max(...numbers);
  }

/** 7. Find the longest string
 * 
 * Create a function named longestString that receives an array of strings as an argument.
The function should return the longest string out of the array of provided strings.
If the array contains more than one string of the same length, the first found longest string should be returned.
 */

function longestString(strings) {
    let long = strings[0];
    for (i = 0; i < strings.length; i++) {
      if (strings[i].length > long.length) {
        long = strings[i];
      }
    }
    return long;
  }

/** 8. Get the full name
 * 
 * Create a function named getFullName that receives an object as an argument.
The function should return the concatenated string containing the firstName and lastName property values from the object.
More specifically, the returned string should represent a person's full name based on the provided object that contains the 
first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}.
 */

function getFullName(personObj) {
    return `${personObj.firstName} ${personObj.lastName}`;
  }

/** 9. Does word exist
 *
 * Create a function named doesWordExist that receives two arguments:

• an array of strings and
• a string with the word we want to check if it exists in that array.

The function should returntrue/false depending on if the word exists in the array or not.
 */

function doesWordExist(wordsArr, word) {
    if (wordsArr.includes(word)) return true;
     else return false;
  }

/** 10. Find unique word (not sure)
 * 
 * Create a function named findUnique that receives an array of words as an argument.
The function should returns the first found unique (non-repeating) word.
 */

function findUnique(wordsArr) {
    const unique = wordsArr.filter((word, index) => {
      if (wordsArr.indexOf(word) === index);
      return word;
    })
    return unique;
  }

//CORRECTION

function findUnique(wordsArr) {
    if (wordsArr.length === 0) return false;
    
    for (let word of wordsArr) {
      if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
        return word;
      }
    }
    
  }

/** 11. Find max in a two-dimensional array of numbers
 * 
 * Create a function named maxTwoDimArray that receives a two-dimensional array (also called matrix) of numbers as an argument.
The function should return the greatest number from the given nested arrays.
 */

function maxTwoDimArray(matrix) {
    let greatestNum = 0;
    matrix.forEach((arr) => {
      let greatest = Math.max(...arr);
      if (greatest > greatestNum) {
        greatestNum = greatest
      }
    });
    return greatestNum;
  }