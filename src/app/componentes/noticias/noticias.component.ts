import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/clases/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[]=[]
  noticia: Noticia = new Noticia
  posicionActual: number = 0

  constructor(private servicioNoticia: NoticiaService) {  }

  ngOnInit(): void {
    this.obtenerNoticias()
  }

  obtenerNoticias():void{
    this.servicioNoticia.leerNoticias().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.noticias = respuesta
      },
      error =>console.log(error)
    )
  }

  pasarFoto() {
    if(this.posicionActual >= this.noticias.length - 1) {
        this.posicionActual = 0;
    } else {
        this.posicionActual++;
    }
    
}
  retrocederFoto() {
    if(this.posicionActual <= 0) {
        this.posicionActual = this.noticias.length - 1;
    } else {
        this.posicionActual--;
    }
   
}
}
