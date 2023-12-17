let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');
 
// function fetchTodo(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(function(response){
//         return response.json();
//     }).then(function(data){
//         tasks = data.slice(0,10);
//         renderList();
//         console.log(tasks);  
//     })
//     .catch(function(error){
//         console.log('error', error);
//     })
// }

async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks = data.slice(0, 10);
        renderList();
    } catch (e) {
        console.log(e)
    }
}

fetchTodo();

function addtTaskToDom(task) {
    const li = document.createElement("li");
    console.log(li)
    li.innerHTML = `
     <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ""} data-id="${task.id}" class="custom-checkbox">
     <label for="${task.id}">${task.title}</label>
     <img src="bin.svg" class="delete" data-id="${task.id}" />
  `;

    taskList.appendChild(li);
}

function renderList() {

    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        addtTaskToDom(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;
}
renderList();

function markTaskAsComplete(taskId) {

}

function deleteTask(taskId) {
    const newTask = tasks.filter(function (task) {
        return task.id !== taskId
    });

    tasks = newTask;
    renderList();

}

function toggleTask(taskId) {
    const task = tasks.filter(function (task) {
        return task.id === taskId;
    })

    if (task.length > 0) {
        const currentTask = task[0];
        currentTask.completed = !currentTask.completed
        return;
    }
}

// Task Add
function addTask(task) {
    if (task) {
        fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'POST',
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify(task),
        })
        .then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data)
            tasks.push(task);
            renderList();
        })
        .catch(function(error){
            console.log('error', error);
        })
        
    }
    
}

function showNotification(title) {
    alert(title);
}


function handleInputKeyPress(e) {

    if (e.key === "Enter") {
        const title = e.target.value;

        if (!title) {
            showNotification("Task title can not Empty");
            return;
        }

        const task = {
            title: title,
            id: Date.now().toString(),
            completed: false
        }
        addTask(task)
        e.target.value = "";
    }
}

function handleClick(e) {
    const target = e.target;
    if (target.className === "delete") {
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }
    else if (target.className === "custom-checkbox") {
        const taskId = target.id;
        toggleTask(taskId);
    }
}

addTaskInput.addEventListener("keyup", handleInputKeyPress);
document.addEventListener("click", handleClick)