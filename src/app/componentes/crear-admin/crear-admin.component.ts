import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/clases/noticia';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {


  productoNuevo: Producto = new Producto
  productos: Producto[]=[]
  indice: number
  productoSel: Producto = new Producto

  formNuevo: FormGroup = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
    pvp: new FormControl("", Validators.required),
    tipo:new FormControl("", Validators.required)
  })

  noticiaNueva: Noticia = new Noticia
  noticias: Noticia[]=[]
  indiceNoticia: number
  noticiaSelec: Noticia = new Noticia
  formNoticia: FormGroup = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl("", Validators.required),
    texto: new FormControl("", Validators.required),
    fecha: new FormControl("", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("Crudlocal")!=null){
      this.productos = JSON.parse(localStorage.getItem("Crudlocal"))
      console.log(this.productos)
      this.indice = this.productos[this.productos.length-1].id+1
    }else this.indice=0
  }

  crearProducto(): void{
    this.productoNuevo.id = this.indice
    this.indice++
    this.productos.push(this.productoNuevo)
    this.productoNuevo = new Producto()

    localStorage.setItem("Crudlocal/productos", JSON.stringify(this.productos))
  }

  crearNoticia(): void{
    this.noticiaNueva.id = this.indiceNoticia
    this.indiceNoticia++
    this.noticias.push(this.noticiaNueva)
    this.noticiaNueva = new Noticia()

    localStorage.setItem("Crudlocal/noticias", JSON.stringify(this.noticias))
  }

}
