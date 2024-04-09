var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians1 = ["David Blaine", "Apllo Robbins", "Shin Lim"];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicians1[i] = (magicians1[i] + ' the Great');
    }
}
function showMagicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magicians1);
make_great(copyMagicianArray);
console.log("\n\n This is my original array");
showMagicians(magicians1);
console.log("\n\n This is my modified copy of the array");
showMagicians(copyMagicianArray);
