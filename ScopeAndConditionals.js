// here we go for the  discussing the scope and conditional statements
// first of all types of variables
var b = "Rahim"; // var is used when we want to override a variable
console.log(b);
// let is used locally in an object ie {} outside of which it have no scope
// const is used for making the variable constant
const name = "Nadan"
//name= "ismail"   // these will through an errorr bc we cnt override the variable
/////////////////////////////////////////////

// conditional statements..............
//1. if else
// const a=10;
//  if (a==12) {
//      console.log("the value is 10")
//  } 
//  else if(a==2) {
//     console.log("the value is 2")
//  }
//  else if(a==1){
//      console.log("the value is 1")
//  }
//  else{
//      console.log("the value doesnt match")
//  }

// switch statements
const a = 12;

switch (a) {
    case 10:
        console.log("the value is 10")
        break;
    case 12:
        console.log("the value is 12")
        break;
    case 3:
        console.log("the value is 13")
        break;

    default:
        console.log("the value dont match")
        break;
}