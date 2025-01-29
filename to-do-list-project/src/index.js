import "./styles.css"
import { createTask } from "./createTask";
import { project } from "./project";
import { Menu } from "./menu";



function index() {
    // Llamamos a createTask.TaskForm para asegurarnos de que el formulario esté en el DOM
    createTask.TaskForm();
    
    // Ahora seleccionamos el formulario y el fondo modal después de que se haya creado
    const formTaskContainer = document.querySelector(".form-task");
    const modalBackground = document.querySelector(".modal-background");
    
    // Asegúrate de que los botones están en su lugar
    const navButtons = document.querySelectorAll(".button-navs button");
    
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.id === "createTask") {
                // Mostrar el formulario y el fondo modal cuando se haga clic en "Create Task"
                formTaskContainer.style.display = "block";
                modalBackground.style.display = "block";  // Mostrar el fondo modal
            }
        });
    });

    // Cerrar el formulario cuando se haga clic en el fondo
    modalBackground.addEventListener("click", () => {
        formTaskContainer.style.display = "none";
        modalBackground.style.display = "none"; // Ocultar el fondo modal cuando se haga clic fuera
    });
}

index();

index();