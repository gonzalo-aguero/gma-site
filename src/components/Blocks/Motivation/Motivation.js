export default class Motivation{
    constructor(){
        this.html = `
            <section id="section-motivacion">
                <div class="div-motivacion _0" style="background-image: url('./src/media/img/motivation/llevatunegocioalaweb.jpg');">
                    <div class="texto1 animate__animated animate__flipInY">
                        <h2>No te quedes atrás</h2>
                    </div>
                    <div class="texto2 animate__animated animate__flipInY">
                        <h2>No te quedes atrás</h2>
                        <p>
                            Hoy en día la mayoría de las empresas ya están en internet. Sea por medio de redes sociales o con su propio sitio web. Teniendo un sitio web le darás una buena imagen a tu empresa, generarás confianza y por ende, más ventas.
                        </p>
                    </div>
                </div>
                <div class="div-motivacion _1" style="background-image: url('./src/media/img/motivation/proyectatusideas.jpg');">
                    <div class="texto1 animate__animated animate__flipInY">
                        <h2>Agilizá tu negocio</h2>
                    </div>
                    <div class="texto2 animate__animated animate__flipInY">
                        <h2>Agilizá tu negocio</h2>
                        <p>
                            Agilizá tu negocio teniéndolo abierto las 24 horas del día junto con herramientas que harán que el funcionamiento de tu empresa sea mucho más eficiente.
                        </p>
                    </div>
                </div>
                <div class="div-motivacion _2" style="background-image: url('./src/media/img/motivation/conectaConTusClientes.jpg');">
                    <div class="texto1 animate__animated animate__flipInY">
                        <h2>Clientes felices</h2>
                    </div>
                    <div class="texto2 animate__animated animate__flipInY">
                        <h2>Clientes felices</h2>
                        <p>
                            ¿Qué mejor para tus clientes que poder saber todo sobre tus productos y/o servicios desde la comodidad de su hogar? <br> ¡Podrán comprarte desde sus casas y a cualquier horario!
                        </p>
                    </div>
                </div>
            </section>
            `;
        this.element_0 = null;
        this.element_1 = null;
        this.element_2 = null;
    }
    run(){
        this.element_0 = document.querySelector('#section-motivacion > ._0');
        this.element_1 = document.querySelector('#section-motivacion > ._1');
        this.element_2 = document.querySelector('#section-motivacion > ._2');

        //### EVENTS TO SHOW TEXT 2 ###//
        this.element_0.addEventListener("mouseover",()=>{
            this.rotate("_0",true);
        });
        this.element_1.addEventListener("mouseover",()=>{
            this.rotate("_1",true);
        });
        this.element_2.addEventListener("mouseover",()=>{
            this.rotate("_2",true);
        });
        
        //### EVENTS TO HIDDEN TEXT 2 ###//
        this.element_0.addEventListener("mouseout",()=>{
            this.rotate("_0",false);
        });
        this.element_1.addEventListener("mouseout",()=>{
            this.rotate("_1",false);
        });
        this.element_2.addEventListener("mouseout",()=>{
            this.rotate("_2",false);
        });
    }
    /**
     * Display the secondary text.
     * @param {String} _number Number of the element. Example: "_0", "_1", or "_2".
     * @param {Boolean} show If True, show text 2. Otherwise, hide text 2.
     */
    rotate(_number,show){
        const text1 = document.querySelector(`.${_number} > .texto1`);
        const text2 = document.querySelector(`.${_number} > .texto2`);
        if(show){
            text1.style.display = "none";
            text2.style.display = "block";
        }else{
            text2.style.display = "none";
            text1.style.display = "block";
        }
    }
}