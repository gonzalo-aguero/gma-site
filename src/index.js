"use strict"
import SiteConfig from "./modules/SiteConfig.js";
import LoadingView from "./components/LoadingView/LoadingView.js";
import Home from "./components/Home/Home.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Contact from "./components/Contact/Contact.js";

var sc = new SiteConfig();
var loadingView = new LoadingView();
var home = new Home(sc);
var aboutUs = new AboutUs(sc);
var contact = new Contact(sc);
var hash = window.location.hash;
var app = document.getElementById("app");
loadingView.printHTML();
loadingView.run();
setView(hash);
window.addEventListener("hashchange",()=>{
    hash = window.location.hash;
    setView(hash);
});

function setView(ViewHash) {
    switch (ViewHash) {
        // ### HOME PAGE ###.
        case "":
            document.title = sc.Views.Inicio.Title;
            app.innerHTML = home.html;
            home.run();
            break;
        // ### HOME PAGE ###.
        case sc.Views.Inicio.UrlHash:
            document.title = sc.Views.Inicio.Title;
            app.innerHTML = home.html;
            home.run();
            break;
        // ### ABOUT US PAGE ###.
        case sc.Views.Nosotros.UrlHash:
            document.title = sc.Views.Nosotros.Title;
            app.innerHTML = app.innerHTML = aboutUs.html;
            aboutUs.run();
            break;
        // ### SERVICES PAGE ###.
        case sc.Views.Servicios.UrlHash:
            document.title = sc.Views.Servicios.Title;
            app.innerHTML = app.innerHTML = home.showView();
            home.run();
            break;
        // ### CONTACT PAGE ###.
        case sc.Views.Contacto.UrlHash:
            document.title = sc.Views.Contacto.Title;
            app.innerHTML = app.innerHTML = contact.html;
            contact.run();
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
