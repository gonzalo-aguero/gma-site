var pixelesCercania = 450;
var pixelesCercania2 = 550;
var timeH2yP = 500;
var timeImgH2yP = 1250;
var ON_nosotros = false;
var ON_llevaTuNegocioALaNube = false;
var ON_proyectaTusIdeas = false;
var ON_conectaConTusClientes = false;

var ON_ServicioSitioWebSimple = false;
var ON_ServicioSitioWebComercial = false;
var ON_ServicioPublicidad = false;
var ON_ServicioAdmin = false;
//ANIMACIONES DE ELEMENTOS AL BAJAR
$(document).on("scroll", function(){
    //nosotros
    // var pos_nosotros = document.getElementById('nosotros').getBoundingClientRect().top;
    // if(pos_nosotros < pixelesCercania && ON_nosotros == false){
    //     display('nosotros h2','id','block')
    //     setTimeout(() => {
    //         display('nosotros div','id','block')
    //     }, timeH2yP);
    //     ON_nosotros = true;
    // }
    //ServicioSitioWebSimple
    // var pos_ServicioSitioWebSimple = document.getElementById('ServicioSitioWebSimple').getBoundingClientRect().top;
    // if(pos_ServicioSitioWebSimple < pixelesCercania2 && ON_ServicioSitioWebSimple == false){
    //     $('#ServicioSitioWebSimple').animate({
    //         left: 0
    //     },750)
    //     setTimeout(() => {
    //         display('txt-ServicioSitioWebSimple h2','id','block')
    //         setTimeout(() => {
    //             display('txt-ServicioSitioWebSimple p','id','block')
    //         }, timeImgH2yP);
    //     }, timeImgH2yP);
    //     ON_ServicioSitioWebSimple = true;
    // }
    //ServicioSitioWebComercial
    // var pos_ServicioSitioWebComercial = document.getElementById('ServicioSitioWebComercial').getBoundingClientRect().top;
    // if(pos_ServicioSitioWebComercial < pixelesCercania2 && ON_ServicioSitioWebComercial == false){
    //     $('#ServicioSitioWebComercial').animate({
    //         right: 0
    //     },750)
    //     setTimeout(() => {
    //         display('txt-ServicioSitioWebComercial h2','id','block')
    //         setTimeout(() => {
    //             display('txt-ServicioSitioWebComercial p','id','block')
    //         }, timeImgH2yP);
    //     }, timeImgH2yP);
    //     ON_ServicioSitioWebComercial = true;
    // }
    //ServicioAdmin
    // var pos_ServicioAdmin = document.getElementById('ServicioAdmin').getBoundingClientRect().top;
    // if(pos_ServicioAdmin < pixelesCercania && ON_ServicioAdmin == false){
    //     display('txt-ServicioAdmin h2','id','block')
    //     setTimeout(() => {
    //         display('txt-ServicioAdmin p','id','block')
    //     }, timeH2yP);
    //     ON_ServicioAdmin = true;
    // }
    //comoTrabajamos
    /*var pos_comoTrabajamos = document.getElementById('comoTrabajamos').getBoundingClientRect().top;
    if(pos_comoTrabajamos < pixelesCercania && ON_comoTrabajamos == false){
        display('comoTrabajamos h2','id','block')
        setTimeout(() => {
            display('comoTrabajamos p','id','block')
        }, timeH2yP);
        ON_comoTrabajamos = true;
    }*/
});