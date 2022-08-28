const toDoForm=document.getElementById("todo-form");
const toDoList=document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let todos =[];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deletToDo(event){
    const li =event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deletToDo);

    list.appendChild(span);
    list.appendChild(button);

    toDoList.appendChild(list);

}

function toDoSubmit(event){
    //localStorage.setItem(todo,toDoInput);
    event.preventDefault();
    //console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id:Date.now(),
    };
    todos.push(newTodoObj);
    paintToDo(newTodo);
    //console.log(todos);
    saveTodos();
}

toDoForm.addEventListener("submit",toDoSubmit);
//console.log(toDoInput);
//toDoList = document.createElement("li");
//toDoList.src = `${todo}`;

const savedTodos = localStorage.getItem(TODOS_KEY);

function sayHello(item){
    console.log("Hello ",item);
}

if(savedTodos!==null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    //parsedTodos.forEach(sayHello);
    //==.forEach((item)=>console.log("Hello ",item));
    parsedTodos.forEach(paintToDo);
}


function filter(){

}
