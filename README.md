# gmadesarrolloweb.ml
Repositorio del sitio gmadesarrolloweb.ml.

## Estructura del código.
En el DOM solo se enlaza el archivo index.js, el cuál importa todos los módulos necesarios.
El sitio funciona como una SPA (Single Page Application). Su navegación es por medio de hash de url, por ejemplo: "gmadesarrolloweb.ml/#Contacto".
En el modulo principal "index.js" se importan los módulos de cada "página" o mejormente dicho vistas (views):
- Home.
- Nosotros.
- Servicios.
- Contacto.

En cada vista a su vez, se importan los módulos correspondientes a los componentes o elementos que necesita. Por ejemplo:
- Header.
- CoverPage.
- ContactForm.
- OurClients.
- Footer.

Cada módulo posee una clase con el mismo nombre, por lo que todo el programa funciona con POO (Programación Orientada a Objetos). No era necesario hacerlo así, pero decidí hacerlo para mantener una estructura más organizada.
Cada módulo posee principalmente lo siguiente:
- Propiedad "html": Contiene un String con todo el código HTML del componente.
- Método run(): Éste método ejecuta todas las instrucciones necesarias para iniciar el correcto funcionamiento del componente, como por ejemplo: añadir eventos, colocar información dinámica, inicializar animaciones, etc. Habrán varios casos en los que el método run() estará vacío ya que el componente será estático.

### Función setView()
La función setView() se encarga de actualizar el HTML de la página para mostrar la nueva vista. Recibe un parámetro String el cuál corresponde al hash de la vista.

### Ejemplo de construcción de una vista o view.
~~~
@import Home from "./src/components/Header/Header.js"; //Se importa el módulo del header.
var  home = new Home(); //Como se había mencionado, cada módulo tiene una clase la cuál hay que construir para poder utilizarla.
setView("") //Se muestra la vista "" o "#" la cuál es la de Home.
//Al colocarse la nueva vista de Home, la function setView() ejecuta lo siguiente:
document.title = TituloDeLaVista;
app.innerHTML = home.html; //Se inserta en el "div de contenido" el código HTML de la vista Home.
home.run(); //Se ejecutan los métodos run() de cada componente que necesita la vista.
~~~
