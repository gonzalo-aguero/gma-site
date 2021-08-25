export default class SiteConfig{
    constructor(){
        this.Domain = "https://gmadesarrolloweb.ml";//EXAMPLE: "https://mysite.com"
        this.Views = {};


        // #### VISTA DE INICIO ###
        this.Views.Inicio = {};
        this.Views.Inicio.Name = "Inicio";
        this.Views.Inicio.Title = "GMA Desarrollo web";
        this.Views.Inicio.UrlHash = "#";
        this.Views.Inicio.Url = `${this.Domain}/${this.Views.Inicio.UrlHash}`;

        // #### VISTA DE NOSOTROS ###
        this.Views.Nosotros = {};
        this.Views.Nosotros.Name = "Nosotros";
        this.Views.Nosotros.Title = "Nosotros";
        this.Views.Nosotros.UrlHash = "#Nosotros";
        this.Views.Nosotros.Url = `${this.Domain}/${this.Views.Nosotros.UrlHash}`;

        // #### VISTA DE SERVICIOS ###
        this.Views.Servicios = {};
        this.Views.Servicios.Name = "Servicios";
        this.Views.Servicios.Title = "Servicios";
        this.Views.Servicios.UrlHash = "#Servicios";
        this.Views.Servicios.Url = `${this.Domain}/${this.Views.Servicios.UrlHash}`;

        // #### VISTA DE CONTACTO ###
        this.Views.Contacto = {};
        this.Views.Contacto.Name = "Contacto";
        this.Views.Contacto.Title = "Contacto";
        this.Views.Contacto.UrlHash = "#Contacto";
        this.Views.Contacto.Url = `${this.Domain}/${this.Views.Contacto.UrlHash}`;
    }
}