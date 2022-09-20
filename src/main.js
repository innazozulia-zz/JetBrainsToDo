// let ulList = document.getElementById("task-list");
// let node = document.createElement("li");
let tasks;

function addTask(){
    let ulList = document.getElementById("task-list");

    let node = document.createElement("li");
    node.classList.add("list-item");
    ulList.appendChild(node);

    let inputCheck = document.createElement("input" );
    inputCheck.type = 'checkbox';
    inputCheck.classList.add("inputCheck");
    ulList.appendChild(inputCheck);

    let spanElement = document.createElement('span');
    spanElement.classList.add("task");
    ulList.appendChild(spanElement);

    let delBtn = document.createElement('button');
    delBtn.classList.add("delete-btn");
    delBtn.innerText = 'delete';
    delBtn.addEventListener('click', (obj) => {
        node.remove();
    })
    ulList.appendChild(delBtn);

    let input =  document.getElementById("input-task").value;
    let textNode = document.createTextNode(input);
    spanElement.appendChild(textNode);
    saveLocalTodos(input);

    node.appendChild(inputCheck);
    node.appendChild(spanElement);
    node.appendChild(delBtn);
}
function remove(obj){
    obj.parentNode.remove();
    tasks.clear();
}
function saveLocalTodos(todo) {
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(todo);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getTodo() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log('hhh');
    console.log(tasks);

    tasks.forEach(function(todo){
        let ulList = document.getElementById("task-list");

        let node = document.createElement("li");
        node.classList.add("list-item");
        ulList.appendChild(node);

        let inputCheck = document.createElement("input" );
        inputCheck.type = 'checkbox';
        inputCheck.classList.add("inputCheck");
        ulList.appendChild(inputCheck);

        let spanElement = document.createElement('span');
        spanElement.classList.add("task");
        ulList.appendChild(spanElement);

        let delBtn = document.createElement('button');
        delBtn.classList.add("delete-btn");
        delBtn.innerText = 'delete';
        delBtn.addEventListener('click', (obj) => {
            node.remove();
        })
        ulList.appendChild(delBtn);

        let input =  document.getElementById("input-task").value;
        let textNode = document.createTextNode(input);
        spanElement.appendChild(textNode);
        // spanElement.appendChild(tasks.value);
        // saveLocalTodos(input);

        node.appendChild(inputCheck);
        node.appendChild(spanElement);
        node.appendChild(delBtn);
        // ulList.appendChild(node);
    })

}
getTodo();
