"use strict"
import Header from "../Header/Header.js";
import ServicesBlock from "../Blocks/ServicesBlock/ServicesBlock.js";
import ContactUs from "../Blocks/ContactUs/ContactUs.js";
import OurClients from "../Blocks/OurClients/OurClients.js";
import Footer from "../Footer/Footer.js";

var sc;//SITE CONFIGURATION
var header;
var servicesBlock;
var contactUs;
var ourClients;
var footer;
export default class Services{
    constructor(SiteConfig){
        sc = SiteConfig;
        header = new Header(sc);
        servicesBlock = new ServicesBlock(sc);
        contactUs = new ContactUs(sc);
        ourClients = new OurClients();
        footer = new Footer(sc);

        this.html = `
            ${header.html}
            <section class="portadaT2">
                <h1 class="titulo">Servicios</h1>
            </section>
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