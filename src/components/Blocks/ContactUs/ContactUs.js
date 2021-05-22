var sc;
export default class ContactUs{
    constructor(SiteConfig){
        sc = SiteConfig;
        this.html = `
            <section id="contactanos" class="section1">
                <div>
                    <h1 class="titulo">¡Pedí tu presupuesto!</h1>
                </div>
                <div>
                    <h2>Contactate con nosotros y enterate como funciona nuestro servicio.</h2>
                </div>
                <div>
                    <a href="${sc.Views.Contacto.UrlHash}" id="btnContactar">CONTACTAR</a>
                </div>
            </section>
            `;
    }
    run(){
        console.log("void");
    }
}