"use strict"
import Header from "../Header/Header.js";
import AboutUsBlock from "../Blocks/AboutUsBlock/AboutUsBlock.js";
import OurPoints from "../Blocks/OurPoints/OurPoints.js"
import ServicesBlock from "../Blocks/ServicesBlock/ServicesBlock.js";
import ContactUs from "../Blocks/ContactUs/ContactUs.js";
import OurClients from "../Blocks/OurClients/OurClients.js";
import Footer from "../Footer/Footer.js";

var sc;//SITE CONFIGURATION
var header;
var aboutUsBlock;
var ourPoints;
var servicesBlock;
var contactUs;
var ourClients;
var footer;
export default class AboutUs{
    constructor(SiteConfig){
        sc = SiteConfig;
        header = new Header(sc);
        aboutUsBlock = new AboutUsBlock();
        ourPoints = new OurPoints();
        servicesBlock = new ServicesBlock(sc);
        contactUs = new ContactUs(sc);
        ourClients = new OurClients();
        footer = new Footer(sc);

        this.html = `
            ${header.html}
            ${aboutUsBlock.html}
            ${ourPoints.html}
            ${servicesBlock.html}
            ${contactUs.html}
            ${ourClients.html}
            ${footer.html}
        `;
    }
    run(){
        header.run();
        ourClients.run();
    }
}