<?php
if(!empty($_POST['fullname']) 
    && !empty($_POST['email']) 
    && !empty($_POST['phone'])
    && !empty($_POST['msg'])
    ){
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];
    $message = "
    <html>
    <head>
    </head>
    <body>
        <h1 style='text-align:center;'>Hola GMA</h1>
        <p style='text-align:center;'>has recibido un nuevo mensaje desde el formulario de contacto.</p>
        \n
        Cliente: $fullname\n
        Correo: $email\n
        Telefono: $phone\n
        Mensaje: $msg\n
        \n
        \n
        \n
        Correo enviado automáticamente desde formulario de contacto, no responder.
    </body>
    </html>
    ";
    $title = "Nuevo mensaje";
    $to = "gmadesarrolloweb@gmail.com";
    $from = "notificaciones@gmadesarrolloweb.ml";
    $emailCliente = $email;
    $header = "From: ".$from. "\r\n";
    $header .= "Reply-To: ".$from. "\r\n";
    $header .= "X-Mailer: PHP/". phpversion();
    try {
        $mail = mail($to,$title,$message,$header);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
    if($mail){
        $message = "
            ¡Hola!\n
            Hemos recibido su consulta con éxito. La misma será respondida a la brevedad.\n
            \n
            \n
            \n
            Este es un mensaje enviado automáticamente. Por favor, no lo responda.
        ";
        $to = $emailCliente;
        $from = "notificaciones@gmadesarrolloweb.ml";
        $header = "From: ".$from. "\r\n";
        $header .= "Reply-To: ".$from. "\r\n";
        $header .= "X-Mailer: PHP/". phpversion();
        $mail = mail($to,"Correo recibido",$message,$header);
        echo 1;
    }else {
        echo 0;
    }
}else{
    echo "void";
}            
?>