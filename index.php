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
    <link rel="stylesheet" href="./src/components/Blocks/ServicesBlock/ServicesBlock.css">
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
    <!-- 
        ====== Important note / Nota importante ======

        ENGLISH:
        The content of this website is printed when JavaScript is started. 
        Search engines such as Google, when rendering the page, do not execute JS, 
        so the page would appear blank, something very negative for SEO. 
        So what we do here is copy the html inserted by JavaScript and place it 
        in this file so that Google and other search engines can see the content.

        ESPAÑOL:
        El contenido de este sitio web se imprime cuando se inicia a ejecutar JavaScript. 
        Los motores de busqueda como Google, al renderizar la página no ejecutan JS, 
        por lo que la página aparecería en blanco, algo muy negativo para el SEO. 
        Por lo tanto lo que hacemos aquí es copiar el html insertado por JavaScript y colocarlo 
        en este archivo para que Google y otros motores de búsqueda puedan ver el contenido.
    -->
    <div id="app">
      <div style="
        position: fixed;
        top:0; left:0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background: black;
      "></div>
      <!-- For SEO -->
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
                <a href="#Contacto"><div id="btnPresupuesto" class="btnPresupuesto">PRESUPUESTO</div></a>
            </div>
            <div id="div-menu" class="animate__animated animate__fadeIn">
                <div></div>
                <ul class="animate__animated animate__fadeInRightBig">
                    <img id="btnCerrarMenu" src="./src/media/img/Icons/clear-24px.svg" alt="Cerrar menú">
                    <a href="#">Inicio</a>
                    <a href="#Nosotros">Nosotros</a>
                    <a href="#Servicios">Servicios</a>
                    <a href="#Contacto">Contacto</a>
                    <a href="#Contacto" class="btnPresupuesto" id="btnPresupuesto_menu">PRESUPUESTO</a>
                    <div id="div-socialMenu">
                        <a href="https://www.instagram.com/gma_desarrolloweb" target="_blank" class="icon-instagram"></a>
                        <a href="https://www.facebook.com/gmadesarrolloweb" target="_blank" class="icon-facebook"></a>
                        <a href="https://api.whatsapp.com/send?phone=5493434258605&amp;text=Hola,%20quisiera%20hacer%20una%20consulta:" target="_blank" class="icon-whatsapp"></a>
                    </div>
                </ul>
            </div>
        </nav>
      </header>
      <section class="portada">
          <div class="bx-wrapper" style="max-width: 100%;"><div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 600px;"><div class="slider" style="width: 3215%; position: relative; transition-duration: 1s; transform: translate3d(-1740px, 0px, 0px);"><div id="div-portada3" class="div-portada bx-clone" style="float: left; list-style: none; position: relative; width: 870px;" aria-hidden="true"><h1>¡Da a conocer tu empresa!</h1> </div>
              <div id="div-portada1" class="div-portada" style="float: left; list-style: none; position: relative; width: 870px;" aria-hidden="true"><h1>¡Llevá tu negocio al mundo digital!</h1></div>
              <div id="div-portada2" class="div-portada" aria-hidden="false" style="float: left; list-style: none; position: relative; width: 870px;"><h1>¡Potenciá las ventas de tus productos o servicios!</h1> </div>
              <div id="div-portada3" class="div-portada" style="float: left; list-style: none; position: relative; width: 870px;" aria-hidden="true"><h1>¡Da a conocer tu empresa!</h1> </div>
          <div id="div-portada1" class="div-portada bx-clone" style="float: left; list-style: none; position: relative; width: 870px;" aria-hidden="true"><h1>¡Llevá tu negocio al mundo digital!</h1></div></div></div><div class="bx-controls bx-has-controls-direction bx-has-pager"><div class="bx-controls-direction"><a class="bx-prev" href="">Prev</a><a class="bx-next" href="">Next</a></div><div class="bx-pager bx-default-pager"><div class="bx-pager-item"><a href="" data-slide-index="0" class="bx-pager-link">1</a></div><div class="bx-pager-item"><a href="" data-slide-index="1" class="bx-pager-link active">2</a></div><div class="bx-pager-item"><a href="" data-slide-index="2" class="bx-pager-link">3</a></div></div></div></div>
      </section>
      <section id="section-motivacion">
          <div class="div-motivacion _0" style="background-image: url('./src/media/img/motivation/llevatunegocioalaweb.jpg');">
              <div class="texto1 animate__animated animate__flipInY">
                  <h2>No te quedes atrás</h2>
              </div>
              <div class="texto2 animate__animated animate__flipInY">
                  <h2>No te quedes atrás</h2>
                  <p>
                      Hoy en día la mayoría de las empresas ya están en internet. Sea por medio de redes sociales o con su propio sitio web. Teniendo un sitio web le darás una buena imagen a tu empresa, generarás confianza y por ende, más ventas.
                  </p>
              </div>
          </div>
          <div class="div-motivacion _1" style="background-image: url('./src/media/img/motivation/proyectatusideas.jpg');">
              <div class="texto1 animate__animated animate__flipInY" style="display: block;">
                  <h2>Agilizá tu negocio</h2>
              </div>
              <div class="texto2 animate__animated animate__flipInY" style="display: none;">
                  <h2>Agilizá tu negocio</h2>
                  <p>
                      Agilizá tu negocio teniéndolo abierto las 24 horas del día junto con herramientas que harán que el funcionamiento de tu empresa sea mucho más eficiente.
                  </p>
              </div>
          </div>
          <div class="div-motivacion _2" style="background-image: url('./src/media/img/motivation/conectaConTusClientes.jpg');">
              <div class="texto1 animate__animated animate__flipInY">
                  <h2>Clientes felices</h2>
              </div>
              <div class="texto2 animate__animated animate__flipInY">
                  <h2>Clientes felices</h2>
                  <p>
                      ¿Qué mejor para tus clientes que poder saber todo sobre tus productos y/o servicios desde la comodidad de su hogar? <br> ¡Podrán comprarte desde sus casas y a cualquier horario!
                  </p>
              </div>
          </div>
      </section>
      <section class="section1" id="section-motivosElegirnos">
          <h1 class="tituloT2">¿Porqué elegirnos?</h1>
          <div class="itemArgumento">
              <h2>Buen diseño</h2>
              <p>
                  Un buen diseño siempre inspirará confianza y profesionalidad.
              </p>
          </div>
          <div class="itemArgumento">
              <h2>Soporte</h2>
              <p>
                  Estamos dispuestos a resolver cualquier duda que tengas antes, durante y después del desarrollo.
              </p>
          </div>
          <div class="itemArgumento">
              <h2>Responsive design</h2>
              <p>
                  Hacemos que tu sitio se vea perfecto tanto en computadoras como tablets y celulares.
              </p>
          </div>
          <div class="itemArgumento">
              <h2>Efectivos</h2>
              <p>
                  Siempre logramos cumplir con todos nuestros objetivos.
              </p>
          </div>
      </section>
      <section class="servicios" id="servicios">
          <h1 class="titulo">Lo que ofrecemos</h1>
          <div id="servicesContainer">
              <div id="servicesPage" class="service">
                  <img src="./src/media/img/website.png" alt="Página de servicios">
                  <div>
                      <h2>Página de servicios</h2>
                      <p>
                          Si tu empresa se dedica a vender servicios lo que necesitas es un sitio web donde
                              puedas mostrar lo que haces a tus potenciales clientes. Un sitio como este tendría las
                              típicas secciones "Quienes somos", "Servicios" y "Contacto". Por supuesto que cada empresa
                              es diferente, por lo que usted podría necesitar otras secciones además de estas. Por ejemplo: 
                              una sección de reseñas, una sección para hacer reservas o pedir turnos, o lo que necesite.
                      </p>
                      <a href="#Contacto">Pedir presupuesto</a>
                  </div>
              </div>
              <div id="ecommerce" class="service">
                  <img src="./src/media/img/ecommerce.png" alt="Tienda online">
                  <div>
                      <h2>Tienda online</h2>
                      <p>
                          Si lo que vendes son productos, claramente lo que necesitas es una tienda online o conocida también 
                          como ecommerce. La tienda tendrá todo tu catálogo de productos, carrito de compras, pasarelas de pago y un sistema de gestión de productos y pedidos.
                          Las pasarelas de pago son solo en caso de que desees que tus clientes paguen desde tu tienda online. Ésta aceptaría
                              pagos con tarjetas de débito, crédito y Mercado Pago. Con el sistema de gestión no tendrás que depender de un programador. 
                          Con él podrás administrar los productos y pedidos tu mismo. 
                          Estas serían las funcionalidades básicas de una tienda online. Por supuesto que en caso de necesitar más funcionalidades 
                          solo bastará con explicarnos lo que necesitas.
                      </p>
                      <a href="#Contacto">Pedir presupuesto</a>
                  </div>
              </div>
          </div>
      </section>
      <section id="contactanos" class="section1">
          <div>
              <h1 class="titulo">¡Pedí tu presupuesto!</h1>
          </div>
          <div>
              <h2>Contactate con nosotros y enterate como funciona nuestro servicio.</h2>
          </div>
          <div>
              <a href="#Contacto" id="btnContactar">CONTACTAR</a>
          </div>
      </section>
      <section id="clientes">
          <h1 class="titulo">Nuestros clientes</h1>
          <div id="slider2Container">
              <div class="bx-wrapper" style="max-width: 100%;"><div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 200px;"><div class="slider2" style="width: 4215%; position: relative; transition-duration: 1s; transform: translate3d(-2349.06px, 0px, 0px);"><a href="https://anubisinsumos.com" target="_blank" class="customer _3 bx-clone" style="float: left; list-style: none; position: relative; width: 783.021px;" aria-hidden="true"></a>
                  <a href="https://bgatransporte.com" target="_blank" class="customer _0" style="float: left; list-style: none; position: relative; width: 783.021px;" aria-hidden="true"></a>
                  <a href="https://bskelevadores.com" target="_blank" class="customer _1" aria-hidden="true" style="float: left; list-style: none; position: relative; width: 783.021px;"></a>
                  <a href="https://cabanaspostalesdesauce.com" target="_blank" class="customer _2" aria-hidden="false" style="float: left; list-style: none; position: relative; width: 783.021px;"></a>
                  <a href="https://anubisinsumos.com" target="_blank" class="customer _3" style="float: left; list-style: none; position: relative; width: 783.021px;" aria-hidden="true"></a>
              <a href="https://bgatransporte.com" target="_blank" class="customer _0 bx-clone" style="float: left; list-style: none; position: relative; width: 783.021px;" aria-hidden="true"></a></div></div><div class="bx-controls bx-has-controls-direction bx-has-pager"><div class="bx-controls-direction"><a class="bx-prev" href="">Prev</a><a class="bx-next" href="">Next</a></div><div class="bx-pager bx-default-pager"><div class="bx-pager-item"><a href="" data-slide-index="0" class="bx-pager-link">1</a></div><div class="bx-pager-item"><a href="" data-slide-index="1" class="bx-pager-link">2</a></div><div class="bx-pager-item"><a href="" data-slide-index="2" class="bx-pager-link active">3</a></div><div class="bx-pager-item"><a href="" data-slide-index="3" class="bx-pager-link">4</a></div></div></div></div>
          </div>
      </section>
      <footer>
          <div id="footer-div2">
              <h2>GMA Desarrollo web</h2>
              <ul>
                  <li style="cursor:default">Paraná - Entre Ríos - Argentina</li>
              </ul>
          </div>
          <div id="footer-div1">
              <h2>Secciones</h2>
              <ul>
                  <li class="liInicio">
                      <a href="#">Inicio</a>
                  </li>
                  <li class="liNosotros">
                      <a href="#Nosotros">Nosotros</a>
                  </li>
                  <li class="liServicios">
                      <a href="#Servicios">Servicios</a>
                  </li>
                  <li class="liContacto">
                      <a href="#Contacto">Contacto</a>
                  </li>
              </ul>
          </div>
          <div id="footer-div3">
              <h2>Medios para comunicarte</h2>
              <ul>
                  <li class="instagram"><span class="icon-instagram"></span></li>
                  <li class="phone"><span class="icon-whatsapp"></span></li>
                  <li class="mail4"><span class="icon-mail2"></span></li>
              </ul>
          </div>
      </footer>
    </div>
    <div id="LoadingView"></div>
    <script type="module" src="./src/index.js"></script>
</body>
</html>