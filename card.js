// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const newcheck = [4, 5, 5, 6, 7, 3, 7, 5, 8, 6, 8, 9, 9, 8, 5, 5]
const newcheck1 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, newcheck, newcheck1];
//function that accepts a string and converts it into an array of numbers like the initially provided arrays

//let a = "1,2,3,4";

const b = string => string.split(',').map(item => {
    return parseInt(item, 10);
});

//console.log(b(a))

//Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid, use the Luhn algorithm
const validateCred = value => {
  let newNumber = value.slice(-1)[0] 
  let arr = value.slice(0, -1);
  arr.reverse();
  let sum = 0;
    for (let n = arr.length - 1; n >= 0; n--) {
      if (n % 2 === 0){
           arr[n] * 2;
           }
        if (n % 2 === 0 && (arr[n] *= 2) > 9) {
           arr[n] -= 9;
        }
        sum += arr[n];
      }
      console.log(sum + newNumber)
return (sum + newNumber) % 10 === 0;
}
//check through the nested array for which numbers are invalid, and return another nested array of invalid cards
batch.forEach(element => console.log(validateCred(element)));
let invalidArray=[];
function findInvalidCards(invalidCard){
  batch.forEach(function (invalidCard) {
    if (validateCred(invalidCard) === false){
       invalidArray.push(invalidCard)
    }
})
}
findInvalidCards();
console.log(invalidArray);

// Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies
const companyArray= [];
const idInvalidCardCompanies = num => {
  for (let i = 0; i< invalidArray.length; i++){
    switch (invalidArray[i][0]) {
        case 3:
        companyArray.push('Amex');
        break;
        case 4:
        companyArray.push('Visa');
        break;
        case 5:
        companyArray.push('Mastercard');
        break;
        case 6:
        companyArray.push('Discover');
        break;
        default:
        return 'Company not found'
    }
  }
return companyArray;
  }
idInvalidCardCompanies();
//console.log(idInvalidCardCompanies(batch))

function cards(arr) {
  let card = idInvalidCardCompanies(arr)
  return card.filter((a, b) => card.indexOf(a) === b)
};

console.log('Wrong card:' + cards(idInvalidCardCompanies))

// function that will convert invalid numbers into valid numbers
function converseArray (element) {
  let newNumber = element.slice(-1)[0] 
  let arr1 = element.slice(0, -1);
  arr1.reverse();
  let sum = 0;
    for (let n = arr1.length - 1; n >= 0; n--) {
      if (n % 2 === 0){
           arr1[n] * 2;
           }
        if (n % 2 === 0 && (arr1[n] *= 2) > 9) {
           arr1[n] -= 9;
        }
        sum += arr1[n];
      }
let sumModulo = (sum + newNumber) % 10;
let newLastnum = 0;
if ( sumModulo > 0) {
  newLastnum =+ (10 - sumModulo)
}
element.splice(-1, 1, newLastnum);
return element;
}

console.log(invalid2)
console.log(converseArray(invalid2))



