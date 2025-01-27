import adress from "./images/address.svg";
import emailImage from "./images/email.svg";
import telephone from "./images/phone.svg";

function loadAbout() {
    const content = document.querySelector("#content");

    if (document.querySelector(".about-container")) {
        console.log("El contenedor de About ya existe.");
        return; 
    }

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add("about-container");
    aboutContainer.classList.add('hidden'); 

    const header = document.createElement('h1');
    header.textContent = "About-us";
    aboutContainer.appendChild(header);

    const aboutContainer_1 = document.createElement('div');
    const celular = document.createElement("p");
    const phoneIcon = document.createElement("img");
    phoneIcon.src = telephone; 
    celular.textContent = "950-897-466";
    aboutContainer_1.appendChild(phoneIcon);
    aboutContainer_1.appendChild(celular);
    aboutContainer.appendChild(aboutContainer_1);

     const aboutContainer_2 = document.createElement('div');
    const email = document.createElement("p");
    email.textContent = "fernando.gomez@gmail.com";
    const emaiIcon = document.createElement("img");
    emaiIcon.src = emailImage;  
    aboutContainer_2.appendChild(emaiIcon);

    aboutContainer_2.appendChild(email);
        aboutContainer.appendChild(aboutContainer_2);

    const aboutContainer_3 = document.createElement('div');
    const direction = document.createElement("p");
    direction.textContent = "Cayma La tomilla av 950 mz 10";
    const addressIcon = document.createElement("img");
    addressIcon.src = adress;  
    
    aboutContainer_3.appendChild(addressIcon);
    aboutContainer_3.appendChild(direction);
    aboutContainer.appendChild(aboutContainer_3);

    content.appendChild(aboutContainer);

    console.log("Contenedor de About creado y agregado al DOM.");
}

export const about = (function () {
    return { loadAbout };
})();