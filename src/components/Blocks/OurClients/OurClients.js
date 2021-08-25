export default class OurClients{
    constructor(){
        this.html = `
            <section id="clientes">
                <h1 class="titulo">Nuestros clientes</h1>
                <div id="slider2Container">
                    <div class="slider2">
                        <a href="https://bgatransporte.com" target="_blank" class="customer _0"></a>
                        <a href="https://bskelevadores.com" target="_blank" class="customer _1"></a>
                        <a href="https://cabanaspostalesdesauce.com" target="_blank" class="customer _2"></a>
                        <a href="https://anubisinsumos.com" target="_blank" class="customer _3"></a>
                    </div>
                </div>
            </section>
            `;
    }
    run(){
        $('.slider2').bxSlider({
            auto: true,
            speed: 1000,
            pause: 4000,
            mode: 'horizontal',
            touchEnabled: false
        });
    }
}