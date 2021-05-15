export default class Footer{
    constructor(){
        //IMPORTED IN index.php
        // this.styles = '<link rel="stylesheet" href="./src/components/Footer/Footer.css">';
    }
    printHTML(){
        return `
            <footer>
                <div id="footer-div2">
                    <h2>GMA Desarrollo web</h2>
                    <ul>
                        <li style="cursor:default">Paraná - Entre Ríos - Argentina</li>
                    </ul>
                </div>
                <div id="footer-div1">
                    <h2>Secciones</h2>
                    <ul>
                        <li class="liInicio">Inicio</li>
                        <li class="liNosotros">Nosotros</li>
                        <li class="liServicios">Servicios</li>
                        <li class="liContacto">Contacto</li>
                    </ul>
                </div>
                <div id="footer-div3">
                    <h2>Medios para comunicarte</h2>
                    <ul>
                        <li class="instagram"><span class="icon-instagram"></span></li>
                        <li class="phone"><span class="icon-whatsapp"></span></li>
                        <li class="mail4"><span class="icon-mail2"></span></li>
                    </ul>
                </div>
            </footer>
        `;
    }
}