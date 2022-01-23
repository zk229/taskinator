var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "new task";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);