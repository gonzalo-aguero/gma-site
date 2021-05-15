function openMenu() {
    $('#div-menu').css('display','block')
}
function closeMenu() {
        $('#div-menu').removeClass("animate__fadeIn").addClass("animate__fadeOut");
        $('#div-menu > ul').removeClass("animate__fadeInRightBig").addClass("animate__fadeOutRightBig");
        setTimeout(() => {
            $('#div-menu').css('display','none');
            $('#div-menu > ul').removeClass("animate__fadeOutRightBig").addClass("animate__fadeInRightBig");
            $('#div-menu').removeClass("animate__fadeOut").addClass("animate__fadeIn");
        }, 200);
}
$(document).ready(()=>{
    $('#btnAbrirMenu').click(()=>{
        openMenu();
    })
    $('#div-menu > div').click(()=>{
        closeMenu();
    })
    $('#btnCerrarMenu').click(()=>{
        closeMenu();
    })
})
