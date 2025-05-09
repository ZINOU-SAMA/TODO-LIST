let add = document.getElementById("new-task");
let section = document.getElementById("add-task");
let switc = false;
let inputContainer = null;
let newTaskButton = null;
let taskInput = null;
let counter = 1;
const addTask = () => {
  if (switc) {
    section.removeChild(inputContainer);
    inputContainer = null;
    switc = false;
    newTaskButton = null;
    taskInput = null;
    return;
  }
  inputContainer = document.createElement("div");
  inputContainer.innerHTML = `
        <input type="text" id="task-input" placeholder="Add a new task...">
        <button type="button" id="add-task-button">Add Task</button>
    `;

  section.appendChild(inputContainer);
  switc = true;
  newTaskButton = document.getElementById("add-task-button");
  taskInput = document.getElementById("task-input");
  newTaskButton.addEventListener("click", newTask);
};

const newTask = () => {
  let task = taskInput.value;
  if (task) {
    let taskList = document.getElementById("task-list");
    let taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `<input type="checkbox" id="checkbox${counter}"/>
                <label for="checkbox-${counter++}">${task}</label>
                <button type="button" class="delete-task"><i class="fa-solid fa-trash-can"></i></button>`;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
};
add.addEventListener("click", addTask);
