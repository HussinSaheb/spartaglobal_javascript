// get element by id name
var wrapperDiv = document.getElementById("wrapper");
// style is property of the wrapper
// wrapperDiv.style.backgroundColor = "lightgrey";

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
// get element
var ul = document.getElementById("list");
//create new element to add
var listItem = document.createElement("li");
// set the value of the new li element
listItem.innerHTML = "new list item";
// insert the newly created element at second to last position
ul.insertBefore(listItem,lis[lis.length - 1]);

// turn every other list item to different color
for (var i = 0; i < lis.length; i++) {
  var className = i % 2 == 0 ? "even": "";
  var li = lis[i];

  li.className = className;
}
var countSpan = document.getElementById("count");
countSpan.innerHTML = lis.length;
