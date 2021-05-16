"use strict"
import Header from "../Header/Header.js";
import AboutUsBlock from "../Blocks/AboutUsBlock/AboutUsBlock.js";
import OurPoints from "../Blocks/OurPoints/OurPoints.js"
import Services from "../Blocks/Services/Services.js";
import ContactUs from "../Blocks/ContactUs/ContactUs.js";
import OurClients from "../Blocks/OurClients/OurClients.js";
import Footer from "../Footer/Footer.js";

var sc;//SITE CONFIGURATION
var header;
var aboutUsBlock;
var ourPoints;
var services;
var contactUs;
var ourClients;
var footer;
export default class Home{
    constructor(SiteConfig){
        sc = SiteConfig;
        header = new Header(sc);
        aboutUsBlock = new AboutUsBlock();
        ourPoints = new OurPoints();
        services = new Services();
        contactUs = new ContactUs();
        ourClients = new OurClients();
        footer = new Footer(sc);

        this.html = `
            ${header.html}
            ${aboutUsBlock.html}
            ${ourPoints.html}
            ${services.html}
            ${contactUs.html}
            ${ourClients.html}
            ${footer.html}
        `;
    }
    run(){
        header.run();
    }
}