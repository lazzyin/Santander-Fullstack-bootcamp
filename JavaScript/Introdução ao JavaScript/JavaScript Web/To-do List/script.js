const inputElement = document.querySelector(".todo-input");
const addTaskButton = document.querySelector(".todo-button");

const validateInput=()=> inputElement.value.trim().length > 0;

handleAddTask = () => {
    const inputIsValid = validateInput()
    
    console.log(inputIsValid)
    if(!inputIsValid){
        return inputElement.classList.add("error");
    }

}

addTaskButton.addEventListener("click", () => handleAddTask() )