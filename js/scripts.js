///Business Logic for To-Do List

function ToDoList(owner, categories) {
    this.items = [];
    this.completedItems = [];
    this.incompletedItems = [];
    this.owner = owner;
    this.categories = categories;
}


// Business Logic for Items

function ToDoItem(category, dueDate, priority) {
    this.category = category;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
}

//"Category" should have a 3 item drop down menu. (MVP: provide these categories myself. Probably work, school, home. Stretch goal: let the user enter them when they create a list)
//So should priority (low, high, urgent)

// let toDoList = {
//     list: [],
//     addItem: function() {

//     },
//     removeItem: function() {

//     }
// }

//create todo list object
//inside, an array of to do items
//also inside: add item, remove item functions

// UI Logic, jQuery ---------------------
$(document).ready(function(event) {
    let name;
    $("#newListForm").submit(function(event) {
        name = $("#nameInput").val();
        $("#newListForm").hide();
        $("#userName").append(name);
        $("#itemsForm").show();
    event.preventDefault();
    });

    

});




//UI Logic, Vanilla JS -------------------
// window.addEventListener("load", function(event) {
//     //this.alert('window is loaded')



//     let makeListButton = document.getElementById("makeListButton");

//     makeListButton.on("click", function(event) {
//    console.log('click'); 
//    event.preventDefault();
// });

// });


