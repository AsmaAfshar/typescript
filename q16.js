"use strict";
// name array
let guestarray = ["Jaweria", "Humaira", "Shumaila"];
// cannot make dinner
let canNotAttend = "Jaweria";
// invite newGuest
let newGuest = "Tazeen";
guestarray[guestarray.indexOf(canNotAttend)] = newGuest;
// send message
guestarray.map((items) => console.log(`Hello,${items} you are invited to dinner`));
console.log("Welcome all we found a bigger dinner table");
guestarray.unshift("noreen");
let middleGuest = "laiba";
let middleIndex = guestarray.length / 2;
guestarray.splice(middleIndex, 0, middleGuest);
guestarray.push("suman");
guestarray.map((item) => console.log(`Dear ${item} You are invited to dinner!`));
