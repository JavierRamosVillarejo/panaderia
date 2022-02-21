import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/clases/noticia';
import { Producto } from 'src/app/clases/producto';
import { NoticiaService } from 'src/app/servicios/noticia.service';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent implements OnInit {


  productoNuevo: Producto = new Producto
  productos: Producto[]=[]
  indice: number
  productoSel: any
  creada: boolean = false

  mostrarEditar:boolean = false

  formProducto= this.fb.group({
    id:[''],
    nombre:[''],
    descripcion:[''], 
    pvp: [''],
    tipo:['Sin especificar'],
    imgSrc:[''],
    idUser:['']
  })

  
  noticiaNueva: Noticia = new Noticia
  noticias: Noticia[]=[]
  indiceNoticia: number
  noticiaSelec: Noticia = new Noticia
  formNoticia = this.fb.group({
    id: [''], 
    titulo:[''],
    texto:[''], 
    fecha: ['']
  })
  
  constructor(private fb:FormBuilder, private servicioProducto: ProductosService, private servicioNoticia: NoticiaService) { }

  ngOnInit(): void { 
    this.obtenerProductos()
    this.obtenerNoticias()
  }

  crearProducto():void{
    this.servicioProducto.insertarProducto(this.formProducto.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.obtenerProductos()
        this.creada=true
        setTimeout(() => {this.creada=false 
        }, 1000);
        this.formProducto.reset()

      },
      error=>{console.log(error)}
    )
  }

  obtenerProductos():void{
    this.servicioProducto.leerProductos().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.productos = respuesta
      },
      error =>console.log(error)
    )
  }

  borrarProductos():void{
    this.servicioProducto.borrarProducto(this.formProducto.value.id).subscribe(
      respuesta=>{
        console.log(respuesta)
        this.formProducto.reset()
        this.obtenerProductos()
      },
      error => {console.log(error)}
    ) 
  }

  editarProducto():void{
    this.servicioProducto.editarProducto(this.formProducto.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.obtenerProductos()
        this.formProducto.reset()
        
      },
      error =>console.log(error)
    )
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

  crearNoticia(): void{
    this.servicioNoticia.insertarNoticia(this.formNoticia.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.obtenerNoticias()
        this.creada=true
        setTimeout(() => {this.creada=false 
        }, 1000);
        this.formProducto.reset()

      },
      error=>{console.log(error)}
    )
  }

  borrarNoticia():void{
    this.servicioNoticia.borrarNoticia(this.formNoticia.value.id).subscribe(
      respuesta=>{
        console.log(respuesta)
        this.formNoticia.reset()
        this.obtenerNoticias()
      },
      error => {console.log(error)}
    ) 
  }

  editarNoticia():void{
    this.servicioNoticia.editarNoticia(this.formNoticia.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.obtenerNoticias()
        this.formNoticia.reset()
        
      },
      error =>console.log(error)
    )
  }
  


}
