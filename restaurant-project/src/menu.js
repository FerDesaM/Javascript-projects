import ajiGallina from "./images/aji_gailina.jpg"
import lomoSaltado from "./images/lomo_saltado.jpg"
import ceviche from "./images/ceviche.jpg"
import anticucho from "./images/anticucho.jpg"
import causaRellena from "./images/causa_rellena.jpg"


class Dishes{
    static DishesList=[
        {
            name:"Aji de Gallina",
            description:"Creamy food make of aji and chicken",
            price:"$9.00"
        },
        {
            name:"Lomo Saltado",
            description:"Fabulous food make of Lomo salted",
            price:"$9.00"
        },
        {
            name:"Causa Rellena",
            description:"Make of potatoes with other products",
            price:"$9.00"
        },
        {
            name:"Ceviche",
            description:"Amazing food make of fish with lemon",
            price:"$9.00"
        },
        
        {
            name:"Anticucho",
            description:"Make of cow heart",
            price:"$9.00"
        },


    ]

}

class Images{
    static ImagesList=
    [ajiGallina,lomoSaltado,causaRellena,ceviche,anticucho];
};
function VisualizationMenu(imgViz,menuItem){
    const menuContainer=document.createElement("div");
    const menuImage=document.createElement("img");
    menuImage.src=imgViz;

    const MenuitemName=document.createElement("p");
    MenuitemName.textContent=menuItem.name;

    const MenuitemDescription=document.createElement("p");
    MenuitemDescription.textContent=menuItem.description;

    const MenuitemPrice=document.createElement("p");
    MenuitemPrice.textContent=menuItem.price;

    menuContainer.appendChild(menuImage);
    menuContainer.appendChild(MenuitemName);
    menuContainer.appendChild(MenuitemDescription);
    menuContainer.appendChild(MenuitemPrice);

    return menuContainer;

};



function loadMenu(){
    const content=document.querySelector("#content");
    const menuContainer=document.createElement("div");
    
    menuContainer.classList.toggle("menu-container");
    menuContainer.classList.toggle("hidden");

    const menuContainer_1 =document.createElement("div");
    menuContainer_1.classList.toggle("menu-item");
    menuContainer_1.classList.toggle("Dishes-Availables");
    const menuHeader=document.createElement("h1");
    menuHeader.textContent="DIshes Availables";
    menuContainer_1.appendChild(menuHeader);

    
    if(Images.ImagesList.length<Dishes.DishesList.length){
        return;
    }
    for(let i=0;i<Dishes.DishesList.length;i++){
        menuContainer_1.appendChild(VisualizationMenu(Images.ImagesList[i],Dishes.DishesList[i]))
    }
    menuContainer.appendChild(menuContainer_1);
    content.appendChild(menuContainer);
}

export const menu=(function()
{
    return {
        loadMenu,
    };
}
)();