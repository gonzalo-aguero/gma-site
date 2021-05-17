<?php
if(!empty($_POST['name']) 
    && !empty($_POST['surname']) 
    && !empty($_POST['mail'])
    && !empty($_POST['phone'])
    && !empty($_POST['msg']) 
    ) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $msg = "Nombre del cliente: ".$name."\r\n"
        ."Apellido: ".$surname."\r\n"
        ."Correo: ".$mail."\r\n"
        ."Telefono: ".$phone."\r\n"
        ."Mensaje: ".$msg."\n\n\n\n"
        ."Correo enviado automáticamente desde formulario de contacto, no responder. ";
    $asunto = "Has recibido un nuevo mensaje";
    $emailReceptor = "gmadesarrolloweb@gmail.com";
    $emailEmisor = "notificaciones@gmadesarrolloweb.ml";
    $mailCliente = $mail;
    $header = "From: ".$emailEmisor. "\r\n";
    $header .= "Reply-To: ".$emailEmisor. "\r\n";
    $header .= "X-Mailer: PHP/". phpversion();
    $mail = mail($emailReceptor,$asunto,$msg,$header);
    if($mail){
        $msg = "Hemos recibido su consulta con éxito. La misma será respondida a la brevedad."."\r\n"
            ."Este es un mensaje enviado automáticamente. Por favor, no lo responda.";
        $emailReceptor = $mailCliente;
        $emailEmisor = "notificaciones@gmadesarrolloweb.ml";
        $header = "From: ".$emailEmisor. "\r\n";
        $header .= "Reply-To: ".$emailEmisor. "\r\n";
        $header .= "X-Mailer: PHP/". phpversion();
        $mail = mail($emailReceptor,"Correo recibido",$msg,$header);
        echo 1;
    }else {
        echo 0;
    }
}else{
    echo "incompleto";
}            
?>