import Project from "./project";
import { createTask } from "./createTask";

export const Menu=(function(){
    //Create a default projects
    let projects=[];
    let currentProject=null;
    const defaultProeject=new Project("Default Project");
    projects.push(defaultProeject);
    currentProject=defaultProeject;

    function createNewProject(projectName){
        const newProject=new Project(newProject);
        projects.push.apply(newProject);
        currentProject=newProject;
        renderProjects();
    }
    function renderProjects(){
        const selectProject=document.querySelector(".project-list");
        selectProject.innerHTML="";
        projects.forEach((project)=>{
            const createProjectButton=document.createElement("button");
            createProjectButton.textContent=project.name;
            createProjectButton.classList.add("project-item");
            createProjectButton.addEventListener("click",()=>{
                currentProject=project;
                renderTask();
            });
            selectProject.appendChild(createProjectButton);
        });

    }

    function renderTask(){
        const contentContainer=document.getElementById("content");
        contentContainer.innerHTML="";
        if (currentProject && currentProject.tasks.length > 0) {
            currentProject.tasks.forEach((task) => {
                const taskElement = document.createElement("div");
                taskElement.textContent = `Title: ${task.title}, Description: ${task.description}, Priority: ${task.priority}`;
                contentContainer.appendChild(taskElement);
            });
        } else {
            contentContainer.textContent = "No tasks available for this project.";
        }
    }
    function menuViewController() {
        const createTaskButton = document.getElementById("createTask");
        const createProjectButton = document.getElementById("createProject");

        createTaskButton.addEventListener("click", () => {
            createTask.TaskForm();
        });
        createProjectButton.addEventListener("click", () => {
            const projectName = prompt("Enter project name:");
            if (projectName) {
                createNewProject(projectName);
            }
        });
    }

    function Init(){
        menuViewController();
        renderProjects();
        renderTask();        
    }
return{
    menuViewController,
    renderProjects,
    currentProject,
    createNewProject,
    renderTask,
    Init,
};

})();