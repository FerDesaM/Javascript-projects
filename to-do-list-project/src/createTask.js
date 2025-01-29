import { Task } from "./Task";

const createTitleInput=function(){
    const input=document.createElement("input");
    input.type="Text";
    input.placeholder="title";
    input.required=true;
    return input;
}
const createDescriptionInput=function(){
    const input=document.createElement("input");
    input.type="Text";
    input.placeholder="description";
    input.required=true;
    return input;
}
const createDateInput=function(){
    const input=document.createElement("input");
    input.type="date";
    input.required=true;
    return input;
}
const createPrioritySelect=function(){
    
    const select=document.createElement("select");
    
    const lowOption=document.createElement("option");
    lowOption.value = "low";
    lowOption.textContent = "Low";

    const mediumOption=document.createElement("option");
    mediumOption.value = "medium";
    mediumOption.textContent = "medium";

    const highOption=document.createElement("option");
    highOption.value = "high";
    highOption.textContent = "high";

    select.appendChild(lowOption);
    select.appendChild(mediumOption);
    select.appendChild(highOption);

    return select;
    
}

const createSubmitButton=function(){
    const button=document.createElement("button");
    button.type="submit";
    button.textContent="submit";
    return button;
}

const handleFormSubmit = function(formTask, setTitle, setDescription, setDate, setPriority) {
    formTask.onsubmit = function(event) {
        event.preventDefault();

        const title = setTitle.value;
        const description = setDescription.value;
        const date = setDate.value;
        const priority = setPriority.value;

        const newTask = new Task(title, description, date, priority);
        console.log(newTask);
        formTask.reset();
        hideTaskForm();
    };
};
function showTaskForm() {
    const formTask = document.querySelector(".form-task");
    const modalBackground = document.querySelector(".modal-background");

    if (formTask && modalBackground) {
        formTask.style.display = "block";
        modalBackground.style.display = "block"; // Mostrar fondo oscuro
    }
}

function hideTaskForm() {
    const formTask = document.querySelector(".form-task");
    const modalBackground = document.querySelector(".modal-background");

    if (formTask && modalBackground) {
        formTask.style.display = "none";
        modalBackground.style.display = "none"; // Ocultar fondo oscuro
    }
}

const TaskForm = function() {
    const content = document.querySelector("#content");
    const formTask = document.createElement("form");
    formTask.classList.toggle("form-task");
    const header=document.querySelector("h1");
    header.textContent="Create Task"
    if (document.querySelector(".form-task")) return;
    const modalBackground = document.createElement("div");
    modalBackground.classList.add("modal-background");
    content.appendChild(modalBackground);
    
    const setTitle = createTitleInput();
    const setDescription = createDescriptionInput();
    const setDate = createDateInput();
    const setPriority = createPrioritySelect();
    const submitButton = createSubmitButton();
    formTask.appendChild(header);
    formTask.appendChild(setTitle);
    formTask.appendChild(setDescription);
    formTask.appendChild(setDate);
    formTask.appendChild(setPriority);
    formTask.appendChild(submitButton);

    content.appendChild(formTask);

    handleFormSubmit(formTask, setTitle, setDescription, setDate, setPriority);
    showTaskForm();
};


export const createTask=(function(){
    return{
        TaskForm,
    }
})();