import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-formy-lista',
  templateUrl: './formy-lista.component.html',
  styleUrls: ['./formy-lista.component.css']
})
export class FormyListaComponent {
  arrNoticias : Noticia[]=[];
  newNoticia : Noticia = {titulo: '', imagen: '', texto: '', fecha: ''}

  constructor(){
    this.arrNoticias = [
      {
        titulo: '¿Conoces estos paisajes insólitos de Canarias?',
        imagen: 'https://estaticos-cdn.prensaiberica.es/clip/ac0ce40a-3b3a-4860-93e5-dcddd4a66a61_16-9-aspect-ratio_75p_0.jpg',
        texto: 'Las Islas Canarias son conocidas por sus paisajes icónicos y variados que a menudo se comparan con destinos exóticos de otros lugares del mundo. Son millones de turistas los que recibe el Archipiélago al año, atraídos no sólo por sus playas, sino también por la cultura y el buen clima.',
        fecha: '30-06-2023'
      },
      {
        titulo: 'Así es el famoso mirador del pueblo más bonito de Canarias',
        imagen: 'https://estaticos-cdn.prensaiberica.es/clip/210c3de4-92bc-4e50-afb8-57de00a963f6_16-9-discover-aspect-ratio_default_0.jpg',
        texto: 'Agulo, el pueblo más bonito de España según la revista The Times, es un lugar destacado en La Gomera, en Canarias. Además de sus impresionantes paisajes y vistas al Teide, cuenta con varias atracciones turísticas, como el Parque Nacional del Garajonay y la casa del artista José Aguilar.',
        fecha: '06-06-2023'
      }
    ]
  }

  //pintar arrNoticias dentro de cargarNoticias
  cargarNoticias(): string {
    let lista: string = '';
    this.arrNoticias.forEach(element => {
      lista+= ` <div class="noticia-individual">
                <li class="noticia-titulo">${element.titulo}</li>
                <li class="noticia-imagen"><img src="${element.imagen}"</li>
                <li class="noticia-fecha"> ${element.fecha}</li>
                <li class="noticia-texto"> ${element.texto}</li> 
                </div>`
    });
    return lista;
  }

  guardarNoticia(): void {
    //este if es para que salte error si algun campo esta vacio o si el titulo se repite
    if (this.newNoticia.titulo !=="" && this.newNoticia.imagen !== "" && this.newNoticia.texto !== "" && this.newNoticia.fecha !== "") {
      let busqueda = this.arrNoticias.findIndex(noticia => noticia.titulo === this.newNoticia.titulo)

      if (busqueda === -1) {
        //si no existe la condicion anterior, puedo añadir el contacto al array
        this.arrNoticias.push(this.newNoticia);
        this.newNoticia = {titulo: '', imagen: '', texto: '', fecha: ''};
      } else {
        //si existe el titulo, sale mensaje de alerta
        alert('Elemento duplicado')
      }
    }   
    
    else {
      alert('Los campos no pueden estar vacíos')
    }
  }

  
}
