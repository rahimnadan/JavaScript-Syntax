// Strings

var a= "Nadan Wazir";
console.log(a);
// concatenation
 var b= "of Wana";
 console.log(a+b);
 // concatenation can also be done by concate function
 console.log(b.concat('swtd'));

 // Method 2
 var address= "ghowa khowa";
 var name= "Rahim wazir"
 var c= `The full Name of Nadan is ${name} and he belongs to ${address}`;
 console.log(c);
 // Finding the length of a string
 console.log("the length of string Name  is",name.length);

 //Escape characters in js like \n and \t etc.
 console.log("nadan \n wazir is a good \t boy");
  
 // creating array from strings which is very imp in databases

var uet = new String ("mardan");
console.log(uet);

///////////////////////////////////////////////////////////////////////////////////////////////////
 // Methods of Strings
//1. slicing
var myname= "Abdur RAhim";
console.log(myname.slice(0,3));
// 2.substr
console.log(myname.substr(0,3));
// the differecne is that slice cannot get negative arguments while the substr can get 
//3. substring .. for making small strings from a whole
console.log(myname.substring(0,7));
// finding index of a any character in a string
console.log(myname.indexOf('A'));//Returns the position of the first occurrence of a substring.
console.log(myname.indexOf('m'));
console.log(myname.lastIndexOf('A'));//Returns the last occurrence of a substring in the string.
// Upper and lower case
console.log(myname.toLowerCase());// takes no arguments
console.log(myname.toUpperCase());// takes no arguments
// replacing any character or part of a string
console.log(myname);
console.log(myname.replace('Abdur', 'Nadan')); 
// searching/finding character on an index
console.log(myname.charAt(4));
// searching/finding character utf code on an index
console.log(myname.charCodeAt(4));
// Another method
console.log(myname[3]);
// so it was all about javascript strings and its methods.


