const inputElement = document.querySelector(".todo-input");
const addTaskButton = document.querySelector(".todo-button");
const tasksContainer=document.querySelector(".tasks-container")

const validateInput=()=> inputElement.value.trim().length > 0;

handleAddTask = () => {
    const inputIsValid = validateInput()
    
    console.log(inputIsValid)
    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')
    
    const completeTask = document.createElement("button")
    completeTask.classList.add('task-button');
    completeTask.innerText = "Feito"
    
    completeTask.addEventListener('click',()=>handleClick(tasksContainer,taskContent))

    const taskContent = document.createElement('p')
    taskContent.innerText = inputElement.value;

    

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(completeTask)

    tasksContainer.appendChild(taskItemContainer);
};

const handleClick = (tasksContainer,taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle("completed");
        }
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () => handleAddTask() )

inputElement.addEventListener('change',()=>handleInputChange())