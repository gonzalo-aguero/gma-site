var sc;
export default class Services{
    constructor(SiteConfig){
        sc = SiteConfig;
        const contactUrl = sc.Views.Contacto.UrlHash;
        this.html = `
            <section class="servicios" id="servicios">
                <h1 class="titulo">Lo que ofrecemos</h1>
                <div id="servicesContainer">
                    <div id="servicesPage" class="service">
                        <img src="./img/website.png" alt="Página de servicios">
                        <div>
                            <h2>Página de servicios</h2>
                            <p>
                                Si tu empresa se dedica a vender servicios lo que necesitas es un sitio web donde
                                    puedas mostrar lo que haces a tus potenciales clientes. Un sitio como este tendría las
                                    típicas secciones "Quienes somos", "Servicios" y "Contacto". Por supuesto que cada empresa
                                    es diferente, por lo que usted podría necesitar otras secciones además de estas. Por ejemplo: 
                                    una sección de reseñas, una sección para hacer reservas o pedir turnos, o lo que necesite.
                            </p>
                            <a href="${contactUrl}">Pedir presupuesto</a>
                        </div>
                    </div>
                    <div id="ecommerce" class="service">
                        <img src="img/ecommerce.png" alt="Tienda online">
                        <div>
                            <h2>Tienda online</h2>
                            <p>
                                Si lo que vendes son productos, claramente lo que necesitas es una tienda online o conocida también 
                                como ecommerce. La tienda tendrá todo tu catálogo de productos, carrito de compras, pasarelas de pago y un sistema de gestión de productos y pedidos.
                                Las pasarelas de pago son solo en caso de que desees que tus clientes paguen desde tu tienda online. Ésta aceptaría
                                    pagos con tarjetas de débito, crédito y Mercado Pago. Con el sistema de gestión no tendrás que depender de un programador. 
                                Con él podrás administrar los productos y pedidos tu mismo. 
                                Estas serían las funcionalidades básicas de una tienda online. Por supuesto que en caso de necesitar más funcionalidades 
                                solo bastará con explicarnos lo que necesitas.
                            </p>
                            <a href="${contactUrl}">Pedir presupuesto</a>
                        </div>
                    </div>
                </div>
            </section>
            `;
    }
    run(){
        console.log("void"); 
    }
}