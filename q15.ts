// name array
let guestarray:string[] = ["Jaweria","Humaira","Shumaila"];

// cannot make dinner
let canNotAttend:string = "Jaweria";
console.log(`${canNotAttend} can not make it, for dinner`);

// invite newGuest
let newGuest :string 
= "Tazeen";
guestarray[guestarray.indexOf(canNotAttend)]=newGuest;
console.log(guestarray);

// send message
guestarray.map((items)=> console.log(`Hello,${items} you are invited to dinner`));


