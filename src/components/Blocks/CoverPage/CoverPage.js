export default class CoverPage{
    constructor(){
        //IMPORTED IN index.php
        // this.styles = '<link rel="stylesheet" href="./src/components/CoverPage/CoverPage.css">';
    }
    printHTML(){
        return `
        <section class="portada">
            <div class="slider">
                <div id="div-portada1" class="div-portada"><h1>¡Llevá tu negocio al mundo digital!</h1></div>
                <div id="div-portada2" class="div-portada"><h1>¡Potenciá las ventas de tus productos o servicios!</h1> </div>
                <div id="div-portada3" class="div-portada"><h1>¡Da a conocer tu empresa!</h1> </div>
            </div>
        </section>
        `;
    }
}