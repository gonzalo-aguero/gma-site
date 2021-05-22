"use strict"
import Header from "../Header/Header.js";
import CoverPage from "../Blocks/CoverPage/CoverPage.js";
import Motivation from "../Blocks/Motivation/Motivation.js";
import OurPoints from "../Blocks/OurPoints/OurPoints.js"
import ServicesBlock from "../Blocks/ServicesBlock/ServicesBlock.js";
import ContactUs from "../Blocks/ContactUs/ContactUs.js";
import OurClients from "../Blocks/OurClients/OurClients.js";
import Footer from "../Footer/Footer.js";

var sc;//SITE CONFIGURATION
var header;
var coverPage;
var motivation;
var ourPoints;
var servicesBlock;
var contactUs;
var ourClients;
var footer;
export default class Home{
    constructor(SiteConfig){
        sc = SiteConfig;
        header = new Header(sc);
        coverPage = new CoverPage();
        motivation = new Motivation();
        ourPoints = new OurPoints();
        servicesBlock = new ServicesBlock(sc);
        contactUs = new ContactUs(sc);
        ourClients = new OurClients();
        footer = new Footer(sc);

        this.html = `
            ${header.html}
            ${coverPage.html}
            ${motivation.html}
            ${ourPoints.html}
            ${servicesBlock.html}
            ${contactUs.html}
            ${ourClients.html}
            ${footer.html}
        `;
    }
    run(){
        header.run();
        coverPage.run();
    }
}