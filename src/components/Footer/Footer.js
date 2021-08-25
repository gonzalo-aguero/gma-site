export default class Footer{
    constructor(sc){
        //sc --> SITE CONFIGURATION.
        this.html = `
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
                        <li class="liInicio">
                            <a href="${sc.Views.Inicio.UrlHash}">${sc.Views.Inicio.Name}</a>
                        </li>
                        <li class="liNosotros">
                            <a href="${sc.Views.Nosotros.UrlHash}">${sc.Views.Nosotros.Name}</a>
                        </li>
                        <li class="liServicios">
                            <a href="${sc.Views.Servicios.UrlHash}">${sc.Views.Servicios.Name}</a>
                        </li>
                        <li class="liContacto">
                            <a href="${sc.Views.Contacto.UrlHash}">${sc.Views.Contacto.Name}</a>
                        </li>
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
    run(){
        console.log("void");
    }
}