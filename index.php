<?php
  header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
  header("Expires: Sat, 1 Jul 2000 05:00:00 GMT"); // Fecha en el pasado
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <title>GMA desarrollo web</title>
    <meta charset="UTF-8">
    <meta name="keywords" content="como tener una pagina,como hacer una pagina,empresas,negocio,empresa,servicio,web,pagina,sitio web,desarrollo web, gmadesarrolloweb.ml, gmadesarrolloweb,GMA,gma,ecommerce,commerce,e-commerce,tienda,tienda online,comercio electronico,gma desarrolloweb,gma desarrollo web,parana,argentina,entre rios,Desarrollo web argentina,Desarrollo web parana,paraná"/>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta name="description" content="Le brindamos a tu empresa la posibilidad de estar presente en internet y poder vender por este poderoso medio. || ¡Consigue tu página web! || ¡Obtén tu tienda online! || ¡Obtén tu e-commerce!"/>
    <meta name="author" content="GMA Desarrollo web" />
    <link rel="icon" type="image/png" href="./src/media/img/favicon/logo4.png" />

    <!-- START LIBRARIES STYLES -->
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./src/libraries/Icons/style.css">
    <link rel="stylesheet" href="./src/libraries/AnimateCSS/animate.css">
    <link rel="stylesheet" href="./src/libraries/jquery.bxslider/jquery.bxslider.css">
    <!-- END LIBRARIES STYLES -->
    <!-- START GENERAL STYLES -->
    <link rel="stylesheet" href="./src/index.css">
    <link rel="stylesheet" href="./src/components/LoadingView/LoadingView.css">
    <!-- END GENERAL STYLES -->
    <!-- START COMPONENTS STYLES -->
    <link rel="stylesheet" href="./src/components/Header/Header.css">
    <link rel="stylesheet" href="./src/components//Blocks/CoverPage/CoverPage.css">
    <link rel="stylesheet" href="./src/components/Blocks/Motivation/Motivation.css">
    <link rel="stylesheet" href="./src/components/Blocks/OurPoints/OurPoints.css">
    <link rel="stylesheet" href="./src/components/Blocks/Services/Services.css">
    <link rel="stylesheet" href="./src/components/Blocks/ContactUs/ContactUs.css">
    <link rel="stylesheet" href="./src/components/Blocks/OurClients/OurClients.css">
    <link rel="stylesheet" href="./src/components/Footer/Footer.css">

    <link rel="stylesheet" href="./src/components/Contact/Contact.css">
    <link rel="stylesheet" href="./src/components/Blocks/ContactForm/ContactForm.css">
    <link rel="stylesheet" href="./src/components/Blocks/AboutUsBlock/AboutUsBlock.css">
    <!-- END COMPONENTS STYLES -->

    <script src="./src/libraries/JQuery/jquery-3.5.1.js"></script>
    <script src="./src/libraries/jquery.bxslider/jquery.bxslider.min.js"></script>
    <!--origen de imagenes(pixabay.com,undraw.co,pexels.com)-->
    <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '328163691790309');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=328163691790309&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-178474598-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-178474598-1');
</script>
<!--
    [if lt IE 9]
    script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    [endif]
-->
</head>
<body>
    <div id="app"></div>
    <div id="LoadingView"></div>
    <script src="js/main.js"></script>
    <script type="module" src="./src/index.js"></script>
</body>
</html>