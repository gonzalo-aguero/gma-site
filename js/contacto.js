$(document).ready(function(){
    $('#btnEnviar').click(function(){
        $('#btnEnviar').css('display','none');
        $('.cargandoGif').css('display','block');
        var name = $('#name').val();
        var surname = $('#surname').val();
        var mail = $('#mail').val();
        var phone = $('#phone').val();
        var msg = $('#msg').val();
        $.ajax({
            type: "POST",
            url: "./php/mail.php",
            data: { 
                name: name,
                surname: surname, 
                mail: mail, 
                phone: phone, 
                msg: msg
            },
            success: function (response){
                if(response==1){
                    console.log("Correo enviado");
                    $('.cargandoGif').css('display','none');
                    $('#btnEnviar').css('display','block');
                    $('#name').val("");
                    $('#surname').val("");
                    $('#mail').val("");
                    $('#phone').val("");
                    $('#msg').val("");
                    alert("¡Correo enviado correctamente!"+"\n"+"Te responderemos lo antes posible.");
                }else if(response=="incompleto"){
                    $('.cargandoGif').css('display','none');
                    $('#btnEnviar').css('display','block');
                    alert("Todos los campos son obligatorios.");
                }else {
                    $('.cargandoGif').css('display','none');
                    $('#btnEnviar').css('display','block');
                    alert("Ha ocurrido un error al enviar el correo. Intente más tarde o comuníquese vía Whatsapp (+5493434258605)");
                    console.log("Error al enviar correo");
                }
            }
        });
        return false;
    });
});