"use strict"
import Header from "../Header/Header.js";
import CoverPage from "../Blocks/CoverPage/CoverPage.js";
import Motivation from "../Blocks/Motivation/Motivation.js";
import OurPoints from "../Blocks/OurPoints/OurPoints.js"
import Services from "../Blocks/Services/Services.js";
import ContactUs from "../Blocks/ContactUs/ContactUs.js";
import OurClients from "../Blocks/OurClients/OurClients.js";
import Footer from "../Footer/Footer.js";

var header = new Header();
var coverPage = new CoverPage();
var motivation = new Motivation();
var ourPoints = new OurPoints();
var services = new Services();
var contactUs = new ContactUs();
var ourClients = new OurClients();
var footer = new Footer();

export default class Home{
    constructor(){
        
    }
    showView(){
        return `
            ${header.printHTML()}
            ${coverPage.printHTML()}
            ${motivation.printHTML()}
            ${ourPoints.printHTML()}
            ${services.printHTML()}
            ${contactUs.printHTML()}
            ${ourClients.printHTML()}
            ${footer.printHTML()}
        `;
    }
}