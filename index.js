// Selections
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-lists");
const todoFilter = document.querySelector(".filter-todos")

// Event listners
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);
todoFilter.addEventListener("click", filterTodo)
// Functions
function addTodo(event) {
    // prevent form for submit
    event.preventDefault();
    // Create Div
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    // Create li
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = todoInput.value;
    newDiv.appendChild(todoItem);
    // Create check Button
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-btn");
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    newDiv.appendChild(checkButton);
    // Create trash Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    newDiv.appendChild(trashButton);
    // append into div
    todoList.appendChild(newDiv);
    // clear todoInput
    todoInput.value = "";
};

function deleteCheck(e) {
    // delete item
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    // check item
    if(item.classList[0] === "check-btn"){
        item.parentElement.classList.add("checked-btn")
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    const value = e.target.value;
    todos.forEach((todo) =>{
        console.log(todo.classList);
       switch(value){
        case "all":
            // console.log("fuck");
            break;
        case "completed":
            // console.log("fucking is complete");
            break;
        case "uncompleted":
            // console.log("fucking is not complete");
       }
    });
  
}