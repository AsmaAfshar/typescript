// name array
let guestarray:string[] = ["Jaweria","Humaira","Shumaila"];

// cannot make dinner
let canNotAttend:string = "Jaweria";
// invite newGuest
let newGuest :string = "Tazeen";
guestarray[guestarray.indexOf(canNotAttend)]=newGuest;

// send message
guestarray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));

console.log("Welcome all we found a bigger dinner table");

guestarray.unshift("noreen");

let middleGuest:string = "laiba";
let middleIndex = guestarray.length/2;
guestarray.splice(middleIndex,0,middleGuest);


guestarray.push("suman")
 
guestarray.map((item)=> console.log(`Dear ${item} You are invited to dinner!`));



 