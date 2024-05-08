
// function getNames(students, grade) {
//     const getGrade = (percent) => {
//       if (percent >= 85) return 5;
//       else if (percent >= 70) return 4;
//       else if (percent >= 60) return 3;
//       else return 0; /
//     };
//     const filteredStudents = students.filter((student) => getGrade(student.percent) === grade);
  
//     return filteredStudents.map((student) => student.name);
//   }
//   const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alex"}
//   ]


// function getNames(students, grade) {
//     const getGrade = (percent) => {
//       if (percent >= 85) return 5; 
//       else if (percent >= 70) return 4; 
//       else if (percent >= 60) return 3; 
//       else return 0; 
//     };
  
//     const filteredStudents = students.filter((student) => getGrade(student.percent) === grade);
  
//     const namesOfFilteredStudents = filteredStudents.map((student) => student.name);
  
//     return namesOfFilteredStudents;
//   }
  
//   const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
  

//   const result = getNamesByGrade(students, 5);
//   console.log(result); 
  



//     const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const animalCount = animals.reduce((countMap, animal) => {
//     countMap[animal] = (countMap[animal] || 0) + 1;
//     return countMap;
// }, {});

// console.log(animalCount);

// const input = [1, 2, 3, 4, 5];
// const squaredArray = input.map((number) => number ** 2);
// console.log(squaredArray);



// const input = [1, -4, 12, 0, -3, 29, -150];

// const sumOfPositives = input
//   .filter((number) => number > 0) 
//   .reduce((sum, number) => sum + number, 0); 

// console.log(sumOfPositives);



// const input = 'George Raymond Richard Martin';

// const initials = input
//   .split(' ') 
//   .map((word) => word[0]) 
//   .join(''); 

// console.log(initials);

// const input = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
//   ];
  
//   input.sort((a, b) => a.age - b.age);
  
//   const youngest = input[0];
//   const oldest = input[input.length - 1];
  
//   const ageDifference = oldest.age - youngest.age;
  
//   console.log(ageDifference);

  
//   const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = input.filter((number) => number % 2 === 0);
// const oddNumbers = input.filter((number) => number % 2 !== 0);

// console.log("Juft sonlar:", evenNumbers);
// console.log("Toq sonlar:", oddNumbers);



// const input = [3, 6, 9, 2, 3, 5, 6, 9, 3, 8];

// const result = input.reduce((acc, curr) => {
//   if (!acc.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, [input[0]]); 

// console.log(result);



// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(item => item);
//     const falsy = arr.filter(item => !item);
//     return {
//         truthy,
//         falsy
//     };
// }

// const inputArr = [false, 1, 10, "", null, "Nodirbek", 1.13, 0];
// const result = getTruthyFalsy(inputArr);
// console.log(result);


// function getWordLengths(str) {
//     const words = str.split(' ');

//     const wordLengths = words.map(word => word.length);

//     return wordLengths;
// }

// const inputStr = "Nodirbek";
// const result = getWordLengths(inputStr);
// console.log(result);


// function getObjectKeyValuePairs(obj) {
//     const pairs = Object.entries(obj).map(([key, value]) => `${key}${value}`);

//     return pairs;
// }


// const inputObj = {a: 2, b: 5, c: 7};
// const result = getObjectKeyValuePairs(inputObj);
// console.log(result);


// function digitSum(number) {
//     if (number === 0) {
//         return 0; 
//     } else {
//         return number % 10 + digitSum(Math.floor(number / 10)); 
//     }
// }

// const num = 12345;
// const result = digitSum(num);
// console.log("Digit sum of", num, "is", result);
