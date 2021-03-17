// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit. 

//const stringLib = () => 
//    {

// Append two strings together, by taking the first string, calling concatanate on it, and giving it the value b
// function concatenate(a,b)
// {
//     let a = "Yuri"; 
//     let b = "Hashimoto"; 
//     let result = a.concat(b); 
//     return result; 
// }

function GetCharsFromTable (startAt, endAt)
{
    let aList = []; 
    for (var i = startAt; startAt < endAt; i++)
    {
        aList.push(String.fromCharCode(i)); 
    }
    return aList; 
}


//take one number, say, 127 and convert it to its ASCII char representation
function ASCIINumberToChar(number)
{
  return number.GetCharsFromTable(); 
}


// take one Character, say, 'A' and convert it to it's Number representation
function CharToAsciiNumber(aChar)
{
    return aChar.GetCharsFromTable (); 
}

    // return a string, ie: Hello becomes olleH
// function ReverseString(origionalString)
// {
//     return origionalString.split("").reverse().join(""); 
// }
// console.log (ReverseString ("Hello")); 

// function GenerateOnlyUpperCase(string)
// {
//     return string.toUpperCase();  
// }
// console.log (GenerateOnlyUpperCase ('Hello')); 


// function GenerateOnlyLowerCase(string)
// {
//     return string.toLowerCase(); 
// }
// console.log (GenerateOnlyLowerCase('HELLO')); 


// Make a loop, and show only numbers, 0 to 9 and return that in a list
function GenerateOnlyNumbers()
{
    let arr =  []
    While (arr.length < 9)
    {
        let r = Math.floor (Math.random() * 9) +1; 
        if (arr.indexOf(r) === -1) arr.push(r); 
    }
}
console.log (arr('9,10,20,0,1,4,5')); 

// function GenerateOnlySymbols()
// {
// //Ie: $, %, !, #, etc
// }


// function GenerateUpperAndLowerCase()
// {
//     //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
// }

// }

