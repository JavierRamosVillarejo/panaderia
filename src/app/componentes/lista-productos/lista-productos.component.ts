import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Comentario } from 'src/app/clases/comentario';
import { Producto } from 'src/app/clases/producto';
import { ComentarioService } from 'src/app/servicios/comentario.service';
import { ProductosService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productoSel: Producto = new Producto
  productos: Producto[]=[]

  mostrarProd: boolean = false
  mostrarFormCom: boolean = false
  creada: boolean = false

  comentario: Comentario = new Comentario
  comentarios: Comentario[]=[]
  comentariosProd: Comentario[]=[]
  formComentario= this.fb.group({
    id:[''],
    titulo:[''],
    texto:[''], 
    pts: [''],
    idProd:[this.productoSel.id],
    idUser:['']
  })
  

  constructor( private servicioProducto: ProductosService, private servicioComentario: ComentarioService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.obtenerProductos(),
    this.obtenerComentarios()
    
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
  
  mostrarProducto():void{
    this.servicioProducto.leerProducto().subscribe(
      respuesta=>{
        console.log(respuesta)
        this.productoSel = respuesta
      },
      error =>console.log(error)
      
    )
  }

  obtenerComentarios():void{
    this.servicioComentario.leerComentarios().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.comentarios = respuesta
      },
      error =>console.log(error)
    )
  }
  obtenerComentarioProd():void{
    this.servicioComentario.obtenerComentariosEnviados().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.comentariosProd = respuesta 
      },
      error =>console.log(error)
    )
  }

  crearComentario():void{
    this.servicioProducto.insertarProducto(this.formComentario.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.obtenerComentarios()
        this.creada=true
        setTimeout(() => {this.creada=false 
        }, 1000);
        this.formComentario.reset()
        this.mostrarFormCom=false

      },
      error=>{console.log(error)}
    )
  }

}


