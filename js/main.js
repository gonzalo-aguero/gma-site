function display(identificador,tipoIdent,display){
    if(tipoIdent == 'class'){
        $("."+identificador).css('display',display);
    }else{
        $("#"+identificador).css('display',display);
    }
}
function mostrar_ocultar(identificador,tipoIdent,idBtn){
    if($("#"+idBtn).html() == "Ocultar"){
        //Esta abierto y se cierra
        $("#"+idBtn).html("Ver más")
        if(tipoIdent == 'class'){
            $("."+identificador).slideUp();
        }else{
            $("#"+identificador).slideUp();
        }
    }else{
        //Esta cerrado y se abre
        $("#"+idBtn).html("Ocultar")
        if(tipoIdent == 'class'){
            $("."+identificador).slideDown();
        }else{
            $("#"+identificador).slideDown();
        }
    }
    
}
//verMás, tarjetas servicios
$('.verMas').click(()=>{
    verMas()
})
function verMas(){
    if($(".verMas").html() == "Ocultar"){
        //Esta abierto y se cierra
        $(".verMas").html("Ver más")
        $('.p-servicio').slideUp();
    }else{
        //Esta cerrado y se abre
        $(".verMas").html("Ocultar")
        $('.p-servicio').slideDown();
    }
}
function irPedirPresupuesto(id){
    if(id == "btnServicio1"){
        mostrarFormComenzar();
        $("#ser").val("Hola! Me gustaría que me pasaran presupuesto para una página del tipo Sitio web simple.\nEspecificaciones:\n\n");
    }else if(id == "btnServicio2"){
        mostrarFormComenzar();
        $("#ser").val("Hola! Me gustaría que me pasaran presupuesto para una página del tipo Sitio web avanzado.\nEspecificaciones:\n\n");
    }
}
$('#btnComenzar').click(()=>{
    mostrarFormComenzar();
});
function mostrarFormComenzar(){
    $('#btnComenzar').css('display','none');
    $('.formComenzar').slideDown();
    $('body, html').animate({
        scrollTop: ($('.formComenzar').position().top-100)+"px"
    },1000);
    $('.formComenzar').animate({
        left: 0
    },1000);
}
function girarDivMotivacion(_n,mot){
    if(mot==false){
        $('.'+_n+' > .texto1').css('display','none');
        $('.'+_n+' > .texto2').css('display','block');    
    }else{
        $('.'+_n+' > .texto2').css('display','none');
        $('.'+_n+' > .texto1').css('display','block');
    }
    
}
//tarjetas de motivación(animacion)
var mot1 = false, mot2 = false, mot3 = false;
$('#section-motivacion > ._1').hover(()=>{
    if(mot1==false){
        girarDivMotivacion("_1",mot1);
        mot1=true;
    }else{
        girarDivMotivacion("_1",mot1);
        mot1=false;
    }
})
$('#section-motivacion > ._2').hover(()=>{
    if(mot2==false){
        girarDivMotivacion("_2",mot2);
        mot2=true;
    }else{
        girarDivMotivacion("_2",mot2);
        mot2=false;
    }
})
$('#section-motivacion > ._3').hover(()=>{
    if(mot3==false){
        girarDivMotivacion("_3",mot3);
        mot3=true;
    }else{
        girarDivMotivacion("_3",mot3);
        mot3=false;
    }
})