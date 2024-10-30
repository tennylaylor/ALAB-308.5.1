const numbers = [47, 25, 53, 88, 62];
//let sumarray = 0 ;
function sumArray(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum 
}
console.log (sumArray (numbers)); //argument

////================== bullet point 2 ======/// 

const numbs = [4, 15, 23, 8, 42];
//let sumarray = 0 ;
function sumArray(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log (sumArray (numbs)); //argument


//============= bullet 3 =====////

const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const longest = findLongestWord(words);

function findLongestWord(strings) {
    let longestString = ""; // Initialize 

    for (let i = 0; i < strings.length; i++) {
        
        if (strings[i].length > longestString.length) { //if the current string length is greater than longestString length
            longestString = strings[i]; // Update the longest string
        }
    }

    return longestString; 
}

console.log(longest); // Outputs


//================= bullet 4 ===============///

const words1 = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

function findWordsLongerThan(wordList, lengthLimit) {
    let longWords = []; // Initialize an array for long words
    
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > lengthLimit) { // check if each word is longer than the limit
            longWords.push(wordList[i]); // Add word to longWords if it meets the condition
        }
    }

    return longWords; // Return the array of words longer than the limit
}

const result = findWordsLongerThan(words1, 5);
console.log(result);

//================= bullet 5 ========//

function printNumbers(n) {
    
    if (n < 1) return; // stop recursion when it reach 1.
  
    
    printNumbers(n - 1);// Decrease by 1
  
    console.log(n); // print have recursion
}

printNumbers(10); 

//============= Part 2: Thinking Methodically==================//

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by ascending age
data.sort((a, b) => a.age - b.age);

console.log(data);

//=======================bullet pont 2=========///

const data1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by over age 50
const filteredData = data1.filter(person => person.age <= 50);

console.log(filteredData);

//=================== bullet 3 ==========//
const people= [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
const updatedPeople = people.map(person => ( {name: person.name, age: parseInt(person.age) + 1,  job: person.occupation} )   );

console.log(updatedPeople); 

//=================bullet 4============/////
const people1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
    { id: "48", name: "Barry", occupation: "Runner", age: 25 },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }
];


const totalAge = people1.reduce((sum, person) => sum + person.age, 0); //sum of ages


const averageAge = totalAge / people.length; //average age

console.log("Sum of ages:", totalAge);
console.log("Average age:", averageAge);

