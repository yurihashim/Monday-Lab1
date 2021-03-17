// //Implement the following functions

// // const stringLib = () => 
// //    {

// function add(a, b) {
//     return a + b; 
//   }
//   console.log (add(1,2));   

// function sub(a, b) {
//     return a - b;  
//   }
//   console.log (sub (2,1)); 

// function mul(a, b) {
//     return a * b; 
//   }
//   console.log (mul (1,2)); 

// function div(a, b) {
//     return a / b; 
//   }
//   console.log (div (9,3)); 

// function Exponentiation(a, b) {
//     return a ** b; 
//   }
//   console.log (Exponentiation (2,3)); 

// function Increment(a,b) {
//     return add (a,b)
//   }
//   console.log(Increment(2,1)); 

// function Decrement(a, b) {
//     return sub(a,b); 
//   }
//   console.log(Decrement(2,1)); 
  
// function NumberListA(start,end){
//     // return list of numbers starting at start and ending at end
// let someList = []; // make an empty arry
// for (let count = start; count <= end; count ++) // begin the loop
// {
//     someList.push(count); //add to the array, the count (which is the number in the loop)
// }
// return someList; 
//     }

// function NumberListB(start,count, skipEvery)
//     {
//   // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
//   let someList = []; // empty array
//   let _skipCount = 0; // sert this to 0 initially, we use it to keep track of when we should skip it or not
//   for (let aNumber = start ; (aNumber <= (start+ count)); aNumber++) //begin the loop
//   {
//   if (_skipCount == skipEvery)
//   {
//   someList.push (aNumber); 
//   _skipCount = 0;
//   }
//   _skipCount++; 
//   if (_skipCount >= skipEvery){_skipCount = 0; }
//   }
//      return someList; 
//     }

// function NumberListC(start,count, shouldBeRandomOrNot)
//   {
//     // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
//     let someList = [];
//     for (let bNumber = start; (bNumber < (start + count)); bNumber++)
//     {
//       if (shouldBeRandomOrNot === true){
//       someList.push(RandomNumber (start, (start + count))); 
//     }
//     else
//     {
//       someList.push (bNumber); 
//     }
//     return someList; 
//   }

// function IsOdd(aNumber)
//     {
//     if (aNumber % 2 == 0)
//     return true; 
//     else 
//     return false; 
//     }      
//     console.log(IsOdd(2));   

  
// function IsEven(aNumber)
//     {
//     if (aNumber % 2 == 0)
//     return true; 
//     else 
//     return false; 
//     }      
//     console.log(IsEven(10));  
 

// function RandomNumberList(start,end)
//     {
//     //return list of random numbers between start and end
//     }        

// function RandomNumberList(start,end,count, allowDuplicates)
//     {
//     // return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
//    }
// }   