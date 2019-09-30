
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

var uriList = [];
var storageKey = "servers";

function checkStorage() {
    try {
    if (!localStorage.getItem(storageKey)) {
            //array is empty
            renderEmpty();
        }
        else {
            //display items from array
            //getLocalStorage
            //renderList
            var list = document.getElementById("initMessage");
            list.innerHTML = "surprise!";
        }
    }
    catch(err) {
        console.log(err);
        renderEmpty();
    }
}

function renderEmpty() {
    var strEmpty = "No items have been saved or could not read storage.";
    var list = document.getElementById("initMessage");
    list.innerHTML = strEmpty;
}

function getLocalStorage() {
    //do something
}


function buildUri(jiraID){    
    //build URL
    var txtURIPrefix = "https://feature-";
    var txtURISuffux = ".inshur.com";
    return txtURIPrefix + JiraID + txtURISuffux;
}

