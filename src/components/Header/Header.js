export default class Header{
    constructor(){
        //IMPORTED IN INDEX PAGE
        this.styles = '<link rel="stylesheet" href="./src/components/Header/Header.css">';
    }
    printHTML(){
        return `
            <header>
            <nav>
                <div id="logoANDtitulo" class="div-nav">
                    <img src="img/logo/logoGrandeRedim.png" alt="" srcset="">
                    <div>
                        <h1>GMA</h1>
                        <h2>Desarrollo web</h2>
                    </div>
                </div>
                <div class="div2-nav">
                    <div id="btnAbrirMenu"><img src="iconosMaterial_io/menu-24px.svg" alt="" srcset=""></div>
                    <a href="#Contacto"><div id="btnPresupuesto" class="btnPresupuesto">PRESUPUESTO</div></a>
                </div>
                <div id="div-menu" class="animate__animated animate__fadeIn">
                    <div></div>
                    <ul class="animate__animated animate__fadeInRightBig">
                        <img id="btnCerrarMenu" src="iconosMaterial_io/clear-24px.svg" alt="Cerrar">
                        <a id="" class="btnIrInicio" style="color:#000000; font-weight: bold" href="#">Inicio</a>
                        <a class="" href="#Nosotros">Nosotros</a>
                        <a class="" href="#Servicios">Servicios</a>
                        <a class="" href="#Contacto">Contacto</a>
                        <a href="#Contacto" class="btnPresupuesto" id="btnPresupuesto_menu">PRESUPUESTO</a>
                        <div id="div-socialMenu">
                            <a href="https://www.instagram.com/gma_desarrolloweb" target="_blank" class="icon-instagram"></a>
                            <a href="https://www.facebook.com/gmadesarrolloweb" target="_blank" class="icon-facebook"></a>
                            <a href="https://api.whatsapp.com/send?phone=5493434258605&text=Hola,%20quisiera%20hacer%20una%20consulta:" target="_blank" class="icon-whatsapp"></a>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
        `;
    }
}