console.log("Here is the log of all the elements as an object")
console.log(document.getElementById("listado"));

console.log("here is the log of only the text of each LI element")
console.log(document.getElementById("listado").innerText);

console.log("here it shows only the second LI element TEXT")
var allListElements= (document.getElementsByTagName("li"));
console.log(allListElements[1].innerText);
