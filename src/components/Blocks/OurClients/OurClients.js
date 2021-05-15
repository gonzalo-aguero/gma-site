export default class OurClients{
    constructor(){
        //IMPORTED IN INDEX PAGE
        // this.styles = '<link rel="stylesheet" href="./src/components/Blocks/OurClients/OurClients.css">';
    }
    printHTML(){
        return `
        <section id="clientes">
            <h1 class="titulo">Nuestros clientes</h1>
            <div>
                <a href="https://bskelevadores.com" target="_blank"><img src="img/clientes/bskelevadores(LN).png" alt="BSK elevadores" srcset=""></a>
                <a href="https://bgatransporte.com" target="_blank"><img src="img/clientes/bgatransporte.jpeg" alt="BGA transporte" srcset=""></a>
                <a href="https://anubisinsumos.com" target="_blank"><img src="img/clientes/anubisinsumos.png" alt="Anubis Insumos" srcset=""></a>
                <a href="https://cabanaspostalesdesauce.com" target="_blank"><img src="img/clientes/cabanaspostalesdesauce(LN).png" alt="Cabañas Postales de Sauce" srcset=""></a>
            </div>
        </section>
        `;
    }
}