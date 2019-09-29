

  
  var strEmpty = "No items have been saved or could not read storage.";
  var uriList = [];
  var list = document.getElementById("initMessage");


  // if(!localStorage.getItem("???"))

  if (uriList.length == 0) {
    //array is empty
    list.innerHTML = strEmpty;
  }
  // else {
  //   var newp = document.createElement("p");
  //   newp.innerHTML = strFull;
  //   list.appendChild(newp);
  // }




function updateUriList() {
// arrays stuff
var uriList = ["milk", "eggs", "frosted flakes", "salami", "juice"];
var maxItems = 5;
var newURI = "cucember";
console.log("unmodified array: " + uriList);

var itemIndex = uriList.indexOf(newURI);
console.log("itemIndex= " + itemIndex);


if (itemIndex < 0) {
  //not used before, add to array at beginning
  var itemCount = uriList.unshift(newURI);
  console.log("1");

}
else {
  //already exists, move to top of list and de-duplicate
  console.log("4");
  uriList.splice(itemIndex, 1); //remove current instance
  var itemCount = uriList.unshift(newURI); //add to front
}

while (itemCount > maxItems) {
  uriList.pop();
  itemCount--;
  console.log("3");
}

console.log("modified array: " + uriList);
}


function setStorage() {
  //storage stuff
  var uriList = ["milk", "eggs", "frosted flakes", "salami", "juice"];
  console.log("1: " + uriList);
  localStorage.removeItem("uriList");
  localStorage.setItem("uriList", JSON.stringify(uriList));
  var uriList = JSON.parse(localStorage.getItem("uriList"));
  console.log("2: " + uriList);
  console.log(uriList[0]);
}

function writeUriList() {
  //output array to html bullet list
  var uriList = ["milk", "eggs", "frosted flakes", "salami", "juice"];
  var list = document.getElementById("ulFeatureList");
  var i = "";
  clearList();
  for (i = 0; i < uriList.length; i++) {
    var newItem = document.createElement("LI");       // Create a <li> node

    var newLink = document.createElement("A");       // Create and populate link href                
    newLink.setAttribute('href', uriList[i]);
    newLink.setAttribute('target', '_blank');

    var textNode = document.createTextNode(uriList[i]);  // Create a text node for link text
    newLink.appendChild(textNode);                    // Append the text to <a>
    newItem.appendChild(newLink);                     // Append a to li

    list.appendChild(newItem);
  }
}

function clearList() {
  var list = document.getElementById("ulFeatureList");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
