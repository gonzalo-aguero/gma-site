export default class LoadingView{
    constructor(){
        //Imported in index.php
        this.styles = '<link rel="stylesheet" href="./src/components/LoadingView/LoadingView.css">';
        this.loader = null;
    }
    printHTML(){
        document.getElementById('LoadingView').innerHTML = `
        <div class="animate__animated animate__fadeOut" id="loaderContainer">
            <div class="cube-wrapper">
                <div class="cube-folding">
                <span class="leaf1"></span>
                <span class="leaf2"></span>
                <span class="leaf3"></span>
                <span class="leaf4"></span>
                </div>
                <span class="loading" data-name="Loading">Loading</span>
            </div>
        </div>
        `;
    }
    run(){
        this.loader = document.getElementById('loaderContainer');
    }
    showLoader(){
        document.body.style.overflowY = "hidden";
        this.loader.classList.remove("animate__fadeOut");
        this.loader.style.display = "block";
    }
    hideLoader(timeout = 0){
        setTimeout(() => {
            this.loader.classList.add("animate__fadeOut");
            setTimeout(()=>{
                this.loader.style.display = "none";
            document.body.style.overflowY = "auto";
            },800);
        }, timeout);
    }
}