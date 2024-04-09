let magicians1: string[] = ["David Blaine", "Apllo Robbins", "Shin Lim"];

function copyArray(arr: string[] )  {
    return [...arr]
}
function make_great(magicianArray: string[]) {

    for(let i = 0; i < magicianArray.length; i++) {   
    magicians1 [i] = (magicians1 [i]   +   ' the Great');
    }                   
}
function showMagicians(magicians: string[]) {
    magicians.forEach(element =>{
console.log(element);
    });
}
const copyMagicianArray = copyArray(magicians1)
make_great(copyMagicianArray);
console.log("\n\n This is my original array")
showMagicians(magicians1);
console.log("\n\n This is my modified copy of the array")
showMagicians(copyMagicianArray);
