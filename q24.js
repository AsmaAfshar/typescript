// equality and inequality
var name_1 = "asma";
var name_2 = "asma afshar";
var name_3 = "asma afshar khan";
if (name_1 === name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
// lower case function
if (name_1 != name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
var age_1 = 17;
var age_2 = 25;
// if (age_1 === 18){
console.log("eligible for vote");
{
    console.log("not eligible  for vote");
}
if (age_1 <= age_2) { //less
    console.log("he is younger");
}
if (function (age_2) { return age_1; }) { //greater
    console.log("he is older");
}
if (age_1 === 17 && age_2 === 25) {
    console.log("person is eligible for vote");
}
if (age_1 === 17 || age_2 != 25) {
    console.log("person is not eligible for vote");
}
var country = ["Pakistan", "China", "Japan", "Iran"];
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list");
}
if (!country.includes("India")) {
    console.log("India is not include in an array");
}
