var arrayOfObjects; //Global variable for later manipulating

function getLocalStorage() {
  if (localStorage does not exist) {
    // Create empty array if no local storage

  } else {
    // Parse the array from local storage using json.parse()
  }
}

function setLocalStorage(id, url, somethingElse) {

  //create new object with the data that has been passed in.
  var newObject = {
    id: id,
    url: url,
    somethingElse: somethingElse
  }

  if (arrayOfObjects.length === 3) {
    //remove last item in array (as you only want to store 3)
  }
  // add the newObject to the array.
  // push array to local storage with json.stringify
  
  getLocalStorage(); // Shouldn't really need to be called but could be called as safety net to ensure var arrayOfObjects === localStorage
  renderList(); // Calls renderList function after local storage has updated to update the list
}

function renderList() {
  // Create ul container for the list
  var ul = document.createElement('ul');
  //Loop through array .forEach() would make this simple
  arrayOfObjects.forEach(function(arrayObject) {
    //create 'li'
    //set id attribute on the 'li' as the objects id value for later use (if you still want to be able to delete later)
    //create 'a'
    //set href attribute on the 'a' as the objects url value
    //set target attribute on the 'a'
    //appendChild 'a' to the 'li'
    //appendChild 'li' to the 'ul'
  })
  
  //set innerHTML of the render target to the value of ul  
}

getLocalStorage(); // calls getLocalStorage function for initial load
renderList(); // calls renderList function for initial load

//add event listener for the submit button
document.getElementById('submitButton').addEventListener('click', function() {
  var id = //your input value
  var url = //your contructed url
  var somethingElse = //something else you might want to store
  setLocalStorage(id, url, somethingElse) //call setLocalStorage passing in the submitted data
})