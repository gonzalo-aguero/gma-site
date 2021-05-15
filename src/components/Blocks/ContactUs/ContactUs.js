export default class ContactUs{
    constructor(){
        //IMPORTED IN INDEX PAGE
        // this.styles = '<link rel="stylesheet" href="./src/components/ContactUs/ContactUs.css">';
    }
    printHTML(){
        return `
        <section id="contactanos" class="section1">
            <div>
                <h1 class="titulo">¡Pedí tu presupuesto!</h1>
            </div>
            <div>
                <h2>Contactate con nosotros y enterate como funciona nuestro servicio.</h2>
            </div>
            <div>
                <a href="contacto" id="btnContactar">CONTACTAR</a>
            </div>
        </section>
        `;
    }
}