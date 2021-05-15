"use strict"
import LoadingView from "./components/LoadingView/LoadingView.js";
import Home from "./components/Home/Home.js";
var loadingView = new LoadingView();
var home = new Home();
var hash = window.location.hash;
var app = document.getElementById("app");
loadingView.printHTML();
loadingView.run();
setView(hash);

window.addEventListener("hashchange",()=>{
    hash = window.location.hash;
    setView(hash);
});

function setView(viewName) {
    switch (viewName) {
        case "":
            document.head.title = "Inicio";
            app.innerHTML = home.showView();
            break;
        case `#Nosotros`:
            document.head.title = "Nosotros";
            app.innerHTML = app.innerHTML = home.showView();;
            break;
        case `#Servicios`:
            document.head.title = "Servicios";
            app.innerHTML = app.innerHTML = home.showView();;
            break;
        case `#Contacto`:
            document.head.title = "Contacto";
            app.innerHTML = app.innerHTML = home.showView();;
            break;
        default:
            app.innerHTML = `
                <h1>Error 404 :(</h1>
                <a href="#">Inicio</a>
                <p>Parece que la página que intentas visitar no existe o fue trasladada a otra ubicación.</p>
            `;
            break;
    }
}
