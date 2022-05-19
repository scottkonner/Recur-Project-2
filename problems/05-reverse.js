/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  debugger;
//   if( str.length === 0){
//     return str
//   }
//  if (str.length === 1){
//    return str;
//  }

// //  let last = str.length-1;

// //  let word = str.slice(0,last);
// //  let char = str[last]
// //  const result = char + reverse(word);
//  return result;
if ( str.length === 0){
  return str
}
if (str.length === 1){
  return str
}
let first = str[0]
let letter = str.slice(1, str.length)
const result =reverse(letter) + first
return result
}


console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
