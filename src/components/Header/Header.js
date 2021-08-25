var sc;
export default class Header{
    constructor(SiteConfig){
        sc = SiteConfig;
        this.html = `
            <header>
            <nav>
                <div id="logoANDtitulo" class="div-nav">
                    <img src="./src/media/img/logo/logoGrandeRedim.png" alt="Logo GMA">
                    <div>
                        <h1>GMA</h1>
                        <h2>Desarrollo web</h2>
                    </div>
                </div>
                <div class="div2-nav">
                    <div id="btnAbrirMenu"><img src="./src/media/img/Icons/menu-24px.svg" alt="Abrir menú"></div>
                    <a href="${sc.Views.Contacto.UrlHash}"><div id="btnPresupuesto" class="btnPresupuesto">PRESUPUESTO</div></a>
                </div>
                <div id="div-menu" class="animate__animated animate__fadeIn">
                    <div></div>
                    <ul class="animate__animated animate__fadeInRightBig">
                        <img id="btnCerrarMenu" src="./src/media/img/Icons/clear-24px.svg" alt="Cerrar menú">
                        <a href="${sc.Views.Inicio.UrlHash}">${sc.Views.Inicio.Name}</a>
                        <a href="${sc.Views.Nosotros.UrlHash}">${sc.Views.Nosotros.Name}</a>
                        <a href="${sc.Views.Servicios.UrlHash}">${sc.Views.Servicios.Name}</a>
                        <a href="${sc.Views.Contacto.UrlHash}">${sc.Views.Contacto.Name}</a>
                        <a href="${sc.Views.Contacto.UrlHash}" class="btnPresupuesto" id="btnPresupuesto_menu">PRESUPUESTO</a>
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
        this.logoAndTitle;
        this.divMenu;
        this.ul;
    }
    run(){
        this.logoAndTitle = document.getElementById('logoANDtitulo');
        this.divMenu = document.getElementById("div-menu");
        this.ul = document.querySelector('#div-menu > ul');
        var btnAbrirMenu = document.getElementById("btnAbrirMenu");
        var closeMenuBackgroundButton = document.querySelector("#div-menu > div");
        var closeMenuBtn = document.getElementById("btnCerrarMenu");

        btnAbrirMenu.addEventListener("click", ()=>{
            this.openMenu();
        });
        closeMenuBackgroundButton.addEventListener("click", ()=>{
            this.closeMenu();
        });
        closeMenuBtn.addEventListener("click", ()=>{
            this.closeMenu();
        });
        this.logoAndTitle.addEventListener("click",()=>{
            window.location.hash = "#";
        });
    }
    openMenu(){
        this.divMenu.style.display = 'block';
    }
    closeMenu(){
        this.divMenu.classList.replace("animate__fadeIn", "animate__fadeOut");
        this.ul.classList.replace("animate__fadeInRightBig", "animate__fadeOutRightBig");
        setTimeout(() => {
            this.divMenu.style.display = 'none';
            this.ul.classList.replace("animate__fadeOutRightBig", "animate__fadeInRightBig");
            this.divMenu.classList.replace("animate__fadeOut", "animate__fadeIn");
        }, 200);
    }
}