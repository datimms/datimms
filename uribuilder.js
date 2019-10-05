
/*  on page load
    check if array is already in storage
    if Not, display nothing message
    if so, display items from array
*/

/*  on new entry
    store new value into array
    store new array into storage
    clear previous messages/list items
    display items
*/

/*  on clear
    Delete array from storage
    Clear array
    display nothing message
*/

//toggle logging
//console.log = function() {}






var uriList = [];
var storageKey = "servers";

function initialise() {
    try {
    if (!localStorage.getItem(storageKey)) {
            //array is empty
            console.log("initialise: store is empty");
            renderMessage();
        }
        else {
            //display items from array
            //getLocalStorage
            //renderList
            console.log("initialise: key found, getting value...")
            uriList = getLocalStorage(storageKey);
            renderHistory(uriList);
            
        }
    }
    catch(err) {
        console.log("initialise: " + err);
        renderMessage("There was an error reading from storage. The history will populate for this session only.<br><span style=\"color:red;\">" + err + "<\span>");
    }
}

function renderMessage(message) {
    if (message === undefined) message = "No items have been saved or could not read storage.";
    var list = document.getElementById("initMessage");
    list.innerHTML = message;
}

function getLocalStorage(key) {
    //try catch
    try {
        var value = JSON.parse(localStorage.getItem(key));
        console.log("GetLocalStorage: Key " + key + " has value " + value);
        return value;
    }
    catch(err) {
        console.log("GetLocalStorage: " + err);
    }
}

function setLocalStorage(key,value) {
    try {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
        console.log("setLocalStorage: saved: " + JSON.parse(localStorage.getItem(key)));
    }
    catch (err) {
        console.log("setLocalStorage: " + err);
    }
}

function stubStorage() {
    //storage stuff
    uriList = ["milk", "eggs", "frosted flakes", "salami", "juice"];
    console.log("stubStorage: saving: " + uriList);
    localStorage.removeItem(storageKey);
    localStorage.setItem(storageKey, JSON.stringify(uriList));
    console.log("stubStorage: saved: " + JSON.parse(localStorage.getItem(storageKey)));
  }

function clearLocalStorage(key) {
    if (key === undefined) key = storageKey;
    localStorage.removeItem(key);
}
  

function renderHistory(items) {
    //output array to html bullet list
    //var uriList = ["milk", "eggs", "frosted flakes", "salami", "juice"];
    var list = document.getElementById("ulFeatureList");
    var i = "";
    clearHistory();
    for (i = 0; i < items.length; i++) {
        var newItem = document.createElement("LI");       // Create a <li> node

        var newLink = document.createElement("A");       // Create and populate link href                
        newLink.setAttribute('href', items[i]);
        newLink.setAttribute('target', '_blank');

        var textNode = document.createTextNode(items[i]);  // Create a text node for link text
        newLink.appendChild(textNode);                    // Append the text to <a>
        newItem.appendChild(newLink);                     // Append a to li

        list.appendChild(newItem);
    }
}

function clearHistory() {
    var list = document.getElementById("ulFeatureList");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }

function buildUri(jiraID){    
    //build URL
    var txtURIPrefix = "https://feature-";
    var txtURISuffux = ".inshur.com";
    var uri = txtURIPrefix + jiraID + txtURISuffux;
    console.log("buildUri: " + uri);
    return uri;
}

function updateUriList() {
    // arrays stuff
    //var uriList = ["milk", "eggs", "frosted flakes", "salami", "juice"];
    var maxItems = 5;
    var newUri = buildUri(document.getElementById("txtJiraID").value);
    console.log("updateUriList: unmodified array: " + uriList);
    
    //check to see if newUri has already been saved in array
    var itemIndex = uriList.indexOf(newUri);
    console.log("updateUriList: itemIndex of new item= " + itemIndex);
    
    
    if (itemIndex < 0) {
      //not used before, add to array at beginning
      console.log("updateUriList: URI not in history.")
      var itemCount = uriList.unshift(newUri);   
    }
    else {
      //already exists, move to top of list and de-duplicate
      console.log("updateUriList: URI in history.");
      uriList.splice(itemIndex, 1); //remove current entry
      var itemCount = uriList.unshift(newUri); //add to front
    }
    
    while (itemCount > maxItems) {
      uriList.pop();
      itemCount--;
      console.log("updateUriList: Removed excess items...");
    }
    
    console.log("updateUriList: modified array: " + uriList);
    }


function builder() {
    console.log("submit: button clicked")
    updateUriList();
    setLocalStorage(storageKey,uriList);
    renderHistory(uriList);
}

function resetHistory() {
    clearLocalStorage();
    clearHistory();
    uriList = [];
}