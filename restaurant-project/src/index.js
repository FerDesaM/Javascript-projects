import "./styles.css";
import { about } from "./about.js";
import { home } from "./home.js";
import { menu } from "./menu.js";

import "./styles.css";

function index() {
    const homeContainer = document.querySelector(".home-container");
    menu.loadMenu();
    about.loadAbout();  
    const aboutContainer = document.querySelector(".about-container");
    const menuContainer=document.querySelector(".menu-container");
    const navButtons = document.querySelectorAll(".nav-buttons button");
    const content = document.querySelector("#content");

    if (!homeContainer || !navButtons || !content) {
        console.error("Faltan elementos esenciales en el DOM");
        return;
    }


    homeContainer.classList.remove("hidden");
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            console.log("Botón clickeado:", e.target.id);
            homeContainer.classList.add("hidden");

            if (e.target.id === "Home") {
                homeContainer.classList.remove("hidden");
                aboutContainer.classList.add("hidden");
                menuContainer.classList.add("hidden");

            } else if (e.target.id === "about") {
                if (aboutContainer) {
                    aboutContainer.classList.remove("hidden");
                    homeContainer.classList.add("hidden");
                    menuContainer.classList.add("hidden");
                } else {
                    console.error("El contenedor de About no se ha creado correctamente.");
                }
            } else if (e.target.id === "Menu") {
                console.log("Mostrar menú");
                if (menuContainer) {
                    menuContainer.classList.remove("hidden");
                    aboutContainer.classList.add("hidden")
                    
                    homeContainer.classList.add("hidden");
                } 
            }
        });
    });
}

index();