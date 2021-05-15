export default class Services{
    constructor(){
        //IMPORTED IN INDEX PAGE
        // this.styles = '<link rel="stylesheet" href="./src/components/Services/Services.css">';
    }
    printHTML(){
        return `
        <section class="servicios" id="servicios">
            <h1 class="titulo">Nuestros servicios</h1>
            <div id="div-servicios">
                <article id="sitioWeb" class="servicio">
                    <img src="img/website.png" alt="" srcset="">
                    <div>
                        <h2 class="animate__animated animate__fadeInRightBig">Sitio web</h2>
                        <span id="btnServicio1" class="btnInferior">Pedir presupuesto</span>
                        <span id="verMas1" class="verMas" onclick="mostrar_ocultar('p-sitioWeb','id','verMas','.')">Ver más</span>
                        <p id="p-sitioWeb" class="p-servicio animate__animated animate__fadeIn">
                            <!-- características -->
                            - Creación de página web<br>
                            - Diseño adaptado a dispositivos móviles<br>
                            - Optimización del sitio para mejorar el posicionamiento en Google<br>
                            - Instalación de Google Analytics
                        </p>
                    </div>
                </article>
                <article id="tiendaOnline" class="servicio">
                    <img src="img/ecommerce.png" alt="" srcset="">
                    <div>
                        <h2 class="animate__animated animate__fadeInLeftBig">Tienda online</h2>
                        <span id="btnServicio2" class="btnInferior">Pedir presupuesto</span>
                        <span id="verMas2" class="verMas" onclick="mostrar_ocultar('p-tiendaOnline','id','verMas','.')">Ver más</span>
                        <p id="p-tiendaOnline" class="p-servicio animate__animated animate__fadeIn">
                            <!-- características -->
                            - Creación de página web<br>
                            - Diseño adaptado a dispositivos móviles<br>
                            - Optimización del sitio para mejorar el posicionamiento en Google<br>
                            - Instalación de Google Analytics<br>
                            - Base de datos con usuarios<br>
                            - Creación de tienda online<br>
                            - Carrito de compras<br>
                            - Pasarela de pago
                        </p>
                    </div>
                </article>
            </div>
        </section>
        `;
    }
}