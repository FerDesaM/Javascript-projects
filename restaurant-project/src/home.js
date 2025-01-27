
function loadHome(){
    const content=document.querySelector("#content");
    const homeContainer=document.createElement("div");

    homeContainer.classList.toggle("home-container");
    homeContainer.classList.toggle("hidden");

    const welcome=document.createElement("h1");
    welcome.textContent="Welcome to my restaurant";
    homeContainer.appendChild(welcome)
    const textRestaurant=document.createElement("p");
    textRestaurant.textContent="Welcome to my restaurant in that enjoys the best dishes of Peru"
    homeContainer.appendChild(textRestaurant);
    content.appendChild(homeContainer);
}

export const home=(function()
{   loadHome();
    return {
        loadHome,
    };
}
)();