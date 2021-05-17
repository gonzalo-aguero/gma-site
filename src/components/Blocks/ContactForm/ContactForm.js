var sc;
export default class ContactForm{
    constructor(SiteConfig){
        sc = SiteConfig;
        this.html = `
            <section class="portadaT2">
                <h1 class="titulo">CONTACTO</h1>
            </section>
            <section id="section-contacto">
                <div id="div-form">
                    <h2>Por favor, rellene el formulario para ponernos en contacto</h2>
                    <form id="contactForm">
                        <input type="text" name="fullname" id="fullname" placeholder="Nombre completo">
                        <input type="email" name="email" id="email" placeholder="Correo electrónico">
                        <input type="text" name="phone" id="phone" placeholder="Teléfono">
                        <textarea name="msg" id="msg" placeholder="Mensaje"></textarea>
                        <input class="btnEnviar" id="btnEnviar" type="submit" value="Enviar">
                        <img class="cargandoGif" src="gif/cargandoGif.gif" alt="Cargando...">
                    </form>
                </div>
                <div id="div-social">
                    <h2>Otros medios para comunicarse:</h2>
                    <div>
                        <a href="https://www.instagram.com/gma_desarrolloweb" target="_blank" class="icon-instagram"></a>
                        <a href="https://www.facebook.com/gmadesarrolloweb" target="_blank" class="icon-facebook"></a>
                        <a href="https://api.whatsapp.com/send?phone=5493434258605&text=Hola,%20quisiera%20hacer%20una%20consulta:" target="_blank" class="icon-whatsapp"></a>
                    </div>
                </div>
            </section>
            `;
    }
    run(){
        document.querySelector('#contactForm input[type="submit"]').addEventListener("click",this.submit);
    }
    async submit(){
        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const msg = document.getElementById("msg").value;
        var data = new FormData();
        data.append("fullname",fullname);
        data.append("email",email);
        data.append("phone",phone);
        data.append("msg",msg);
        fetch()
        .then()
        .then()

    }
    async ajax_getProducts(printProducts = true, f) {
        var data = new FormData();
        data.append("action","products");
        const r = await fetch('./src/php/get.php',{ 
            method: 'POST',
            body: data
        });
        const formattedResponse = await r.json();
        if(r.status !== 200)
            throw Error("Error en Products.ajax_getProducts()");
        let productsList = formattedResponse;
        //Se guardan los productos en la propiedad productsList de la clase (Array).
        productsList.forEach((product, i) => {
            this.productsList[i] = {
                id: product.id,
                name: product.name,
                price: product.price,
                description: product.description,
                category: product.category.split(","),// categories array
                images: product.images.split(','),// images array
                stock: product.stock,
                sold: product.sold // sold products (int)
            }
        });
        console.log("Products:",this.productsList);
        if(printProducts){
            let productList = this.findBestSellingProducts(this.productsList);
            this.printProductList(productList,this.productListHTMLTemplate);
        }
        if(f)
            f(productsList);//Callback function.
        return true;
    }
    
}