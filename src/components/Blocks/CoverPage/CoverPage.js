export default class CoverPage {
    constructor() {
        this.html = `
            <section class="portada">
                <div class="slider">
                    <div id="div-portada1" class="div-portada"><h1>¡Llevá tu negocio al mundo digital!</h1></div>
                    <div id="div-portada2" class="div-portada"><h1>¡Potenciá las ventas de tus productos o servicios!</h1> </div>
                    <div id="div-portada3" class="div-portada"><h1>¡Da a conocer tu empresa!</h1> </div>
                </div>
            </section>
            `;
    }
    run() {
        $('.slider').bxSlider({
            auto: true,
            speed: 1000,
            pause: 5000,
            mode: 'horizontal',
            touchEnabled: false
        });
    }
}