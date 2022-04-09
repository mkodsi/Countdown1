// // create an empty array for the todolist
// let todos = [];

// // creates todolist object and adds it to the todolist array
// const addTodo = (title, description, dateCreated, dateDue, status) => {
//    let newTodo = {
//        title: title,
//        description: description,
//        dateCreated: dateCreated,
//        dateDue: dateDue,
//        status: status
//    }

//    todos.push(newTodo);
//    return todos;
// }

// // deletes a todolist object from the todolist array
// const deleteTodo = (todoIndex) => {
//    todos.splice(todoIndex, 1);
// }

// // brings a specific todolist object to the top position (priority) of the list
// const bringToTop = (todoIndex) => {
//    let currTodo = todos[todoIndex];

//    // deletes to do object at current index
//    deleteTodo(todoIndex);

//    // adds to do object as the first element of the array
//    todos.unshift(currTodo);
// }

// // moves a to do object down one spot in the array
// const bringDownOne = (todoIndex) => {
//    let currTodo = todos[todoIndex];

//    // deletes to do object at current index
//    deleteTodo(todoIndex);

//    // places to do object at an index 1 greater than the initial index value
//    todos.splice(todoIndex + 1, 0, currTodo);
// }

// // takes a parameter of the current title of a to do object and replaces it with the parameter for a new title
// const editTitle = (currTitle, newTitle) => {
  
//    // iterate through the array
//    for (let i = 0; i < todos.length; i++){
      
//        // runs the if statement when the current object's title is equal to the title of the to do object we want to alter
//        if (todos[i].title === currTitle){
          
//            // replaces the title with the newTitle parameter
//            todos[i].title = newTitle;
//        }
//    }
// }

// // takes a parameter of the current title of a to do object and replaces the current description with the parameter for a new description
// const editDescription = (currTitle, newDescription) => {

//    // iterate through the array
//    for (let i = 0; i < todos.length; i++){

//        // runs the if statement when the current object's title is equal to the title of the to do object we want to alter
//        if (todos[i].title === currTitle){
          
//            // replaces the description of the to do object with a new description
//            todos[i].description = newDescription;
//        }
//    }
// }

// // takes a parameter of the current title of a to do object and replaces the current date created with the parameter for a new creation date
// const editDateCreated = (currTitle, newDateCreated) => {

//    // iterate through the array
//    for (let i = 0; i < todos.length; i++){

//        // runs the if statement when the current object's title is equal to the title of the to do object we want to alter
//        if (todos[i].title === currTitle){
          
//            // replaces the current date created with a new date created
//            todos[i].dateCreated = newDateCreated;
//        }
//    }
// }

// // takes a parameter of the current title of a to do object and replaces the current due date with the parameter for a new due date
// const editDateDue = (currTitle, newDateDue) => {

//    // iterate through the array
//    for (let i = 0; i < todos.length; i++){

//        // runs the if statement when the current object's title is equal to the title of the to do object we want to alter
//        if (todos[i].title === currTitle){
          
//            // replaces the current due date with the parameter newDateDue
//            todos[i].dateDue = newDateDue;
//        }
//    }
// }

// // takes a parameter of the current title of a to do object and replaces the current status with the parameter with an updated status
// const editStatus = (currTitle, newStatus) => {

//    // iterate through the array
//    for (let i = 0; i < todos.length; i++){

//        // runs the if statement when the current object's title is equal to the title of the to do object we want to alter
//        if (todos[i].title === currTitle){

//            // replaces the current status with the parameter newStatus
//            todos[i].status = newStatus;
//        }
//    }
// }

// addTodo("Homework", "get it done!", "4/4", "4/6", "not done");

// console.log(todos);

