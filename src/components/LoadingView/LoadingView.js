export default class LoadingView{
    constructor(){
        //IMPORTED IN INDEX PAGE
        this.styles = '<link rel="stylesheet" href="./src/components/LoadingView/LoadingView.css">';
        this.img = null;
    }
    printHTML(){
        document.getElementById('LoadingView').innerHTML = `
        <div id="div-cargando" class="animate__animated animate__faster">
            <div id="div-izq" class="animate__animated animate__slow"></div>
            <div id="div-imgCargando">
                <img src="./src/media/img/favicon/logo4.png" class="animate__animated animate__slow animate__fadeIn" alt="Cargando...">
            </div>
            <div id="div-der" class="animate__animated animate__slow"></div>
        </div>
        `;
    }
    run(){
        this.img = document.querySelector('#div-imgCargando > img');
        this.animCargando();
        setTimeout(() => {
            this.endAnimCargando();
        }, 2000);
    }
    animCargando() {
        this.img.style.display = 'block';
        var animCargando = setInterval(() => {
            this.img.classList.remove("animate__fadeIn");
            this.img.classList.add("animate__fadeOut");
            setTimeout(() => {
                this.img.classList.remove("animate__fadeOut");
                this.img.classList.add("animate__fadeIn");
            }, 1000);
        }, 1000);
    }
    endAnimCargando() {
        clearInterval(this.animCargando);
        this.img.classList.remove("animate__fadeIn");
        this.img.classList.remove("animate__slow");
        this.img.classList.add("animate__fast");
        this.img.classList.add("animate__fadeOut");
        setTimeout(() => {
            document.querySelector('#div-izq').classList.add("animate__fadeOutLeftBig");
            document.querySelector('#div-der').classList.add("animate__fadeOutRightBig");
            document.body.style.overflowY = 'auto';
            setTimeout(() => {
                document.querySelector('#div-cargando').style.display = 'none';
            }, 1000);
        }, 500);
    }
}