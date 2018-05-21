// document.addEventListener("DOMContentLoaded", () => {
// });

const allTasks = [];

const form = document.getElementById('create-task-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let task = document.getElementById("new-task-description").value;
    let tasksUl = document.getElementById("tasks")
    allTasks.push(task);

    let taskLi = document.createElement("LI");
    let deleteButton = document.createElement("input");
    deleteButton.type="button"; deleteButton.value = "[x]";
    
    taskLi.innerHTML = task;
    tasksUl.appendChild(taskLi);
    
});



