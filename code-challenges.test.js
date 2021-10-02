// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
//RED GREEN REFRACTOR PARTY!!!

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// a describe method that lists the name of the function with arrow syntax
describe("confusion", () => {

  // it method describes what the function does
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    //an expect method, calling on the confusion() function, followed by an appropriate matcher that checks the expected output of the function return. Not sure if I used the expect.arrayContaining() correctly. Will see in a minute or so
    expect(confusion(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(confusion(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
//Look, Paw, I failed with a red banner.


var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
//Declare function with array as parameter and arrow syntax
// const confusion = (array) => {
//   //method that will filter off first index and shuffle the remaining indexes...Research Mathrandom. Okay, research lead me to want the shift() a buitlin method that removes the first index
//    let byeFirstArray = array.shift();
//    return array;
//shift is shifty...when I return the byeFirstArray it just gives me the value I removed.
// //   Saw a lot of great things for the shuffle...quick approach
// // const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
// // and the Fisher-Yates algorith
// // for(let i = array.length — 1; i > 0; i--){
// //   const j = Math.floor(Math.random() * i)
// //   const temp = array[i]
// //   array[i] = array[j]
// //   array[j] = temp
// // }
// //Time to see what I know...the code block below gave me  ["green", "green", "green"] without the shift I get ["purple", "purple", "purple", "blue", "blue"]..watching this video on the F_Y algorith.
// //  let byeFirst = array.shift()
// // // // return byeFirst
// // let i = 0;
// // let scramArray = array.map(value => array[Math.floor(Math.random() * (i++))]);
// // return scramArray
// // };
// //Alright using this tried, tested, and true method of shuffling
// // using for loop to allow iteration across a decrementing of the indexes of the array. Had to explain it for my brain.
// `j` the random number created from the for loop using a calculation from Math methods...therefore pulling numbers between 0 and `i` decrementing down. Math random gives a number between 0 and 1 therefore multiply by a another number (i+1) since it is a decimal number we use Math.floor to remove anything beyond the decimal point
// // temp is a place to hold the random numbers that will be used as the indexed position of the looped array--values
// // Take this indexed position of the looped array and swap it for the indexed position of the random position
// // now we grab the value at the random position from the stored values
//  return the shuffled array

 const confusion = (array) => {
  let byeFirstArray = array.shift()
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
   } return array
 }
 //I was failing when I was getting the right results..then I saw that I should have included the variables inside of the testing code after describe. Got that green ride of passage.
confusion(colors1);
confusion(colors2)


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
//The colors for the party are red and green.

// a) Create a test with expect statements for each of the variables provided.
// a describe method that lists the name of the function with arrow syntax
describe("bookEnds", () => {

  // it method describes what the function does
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    var nums2 = [109, 5, 9, 67, 8, 24]

    //an expect method, calling on the bookEnds() function, followed by an appropriate matcher that checks the expected output of the function return.
    expect(bookEnds(nums1)).toEqual([-8, 90])
    expect(bookEnds(nums2)).toEqual([5, 109])
  })
})
//FAIL banner is waving.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.
//Declare the function with a parameter of array
const bookEnds = (array) => {
//   //sort() to order in ascending order and pop() and shift() the end and beginning. Tried to combine all methods...got a not a function message. Alright regrouping.
//   // let findThem = array.sort((a, b) => a - b).pop();
//   // return array.shift()  ---> just getting the item that was popped...let's look at the datatype. Everything becomes strings.
//   let newArray = array.sort((a, b) => a - b);
// //  let anotherArray = array.sort((a, b) => a - b).shift();
//  //let e = newArray.splice(0, newArray.length-1);
//    // let bookArray = array.map(value => {newArray.length === 2? newArray : newArray.slice(1, 1)})
//  const filArray =array.filter((value, index, array) => index > 0 && index < array.length)
// return filArray...Telling my brain to calm down and evaluate...
// } Research, research, research...might need to just grab maximum and minimum then sort. Math.max and Math.min need to use the spread operator on arrays.

  let maxNum = Math.max(...array);
  let minNum = Math.min(...array);
  let newArr =  ([maxNum, minNum]);
  return newArr.sort((a, b) => a - b);
};

bookEnds(nums1);
bookEnds(nums2)

//Whew...GREEN means to go on and get some more work for this brain. I will try to keep this under 200 lines

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
//It's that time again Red light, Green light.

// a) Create a test with an expect statement using the variables provided.
// a describe method that lists the name of the function with arrow syntax
describe("twoLess", () => {

  // it method describes what the function does
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]

    //an expect method, calling on the bookEnds() function, followed by an appropriate matcher that checks the expected output of the function return.
    expect(twoLess(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})
//There's FAILure in the air, and it has a red hue.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// b) Create the function that makes the test pass.
//Declare the function and pass the parameter as array.
const twoLess = (...arrays) => {
  //also had to use spread operator with arrays vice array above...this allowed me to combine all the arguments passed into one array which is now named arrays as the parameter. concat the arrays or use spread operator to join arrays...Getting erros...
  // let jointArray = [...array1, ...array2]--->this was not iterable which made me irritable...Had to study it again. I had to start with an empty array titled joint Array then used forEach to iterate across the array and spread operator to add one array to empty array.
  let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    //using the new set syntax...set in js store a collections of values of any type. spread operator helps the new set eliminates duplicates since the set is designed to only hold unique values that can only occur once. Spread operator is beneficial when everything from an array or list needs to be included.
    return [...new Set([...jointArray])]
}

twoLess(testArray1, testArray2)
