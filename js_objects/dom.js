// get element by id name
var wrapperDiv = document.getElementById("wrapper");
// style is property of the wrapper
wrapperDiv.style.backgroundColor = "lightgrey";

// get element by tag name
var lis = document.getElementsByTagName("li");
console.log(lis.length);

lis[1].innerHTML = "im LI and ive changed"


// querry selector
var selected = document.querySelectorAll('li.selected');

for (var i = 0; i < selected.length; i++) {
  selected[i].style.color = "orange";
  selected[i].style.fontWeight = "bold";
}
// create element and add to HTML
var ptag = document.createElement("p");
ptag.innerHTML = "a brand new tag";
document.body.appendChild(ptag);

var ul = document.getElementById("list");
var listItem = document.createElement("li");
listItem.innerHTML = "new list item";
ul.insertBefore(listItem,lis[lis.length - 1]);
