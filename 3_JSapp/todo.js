const toDoForm = document.querySelector("js-toDoForm"),
    toDo

const TODOS_LS = "toDos";


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = 'X';
    const span = document.createElement("span");
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild();
    
}


function handleSubmit(event) {
    event.

    
}


function loadToDos() {
    const toDos = localStorage.getItem();
    if(toDos !== null) {
        
    }else {
        //always on
    }


    toDoForm.addEventListener("submit",handleSubmit);
    
}

function init() {
    loadToDos();
    
}
