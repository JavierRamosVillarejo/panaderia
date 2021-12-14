import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
  ProductoNuevo: Producto = new Producto
  productos: Producto[]=[]
  indice: number
  productoSeleccionado: Producto = new Producto

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("crearProductos")!=null){
      this.productos = JSON.parse(localStorage.getItem("crearProductos"))
      console.log(this.productos)
      this.indice = this.productos[this.productos.length-1].id+1
    }else this.indice=0

    
  }
  insertarProducto(): void{
    
    this.ProductoNuevo.id = this.indice
    this.indice++
    this.productos.push(this.ProductoNuevo)
    this.ProductoNuevo = new Producto()

    localStorage.setItem("crearProductos", JSON.stringify(this.productos))
  }

  editarProducto(productoEntrada: Producto):void{
    for (let i in this.productos){
      if(this.productos[i].id == productoEntrada.id){
        this.productos[i]=productoEntrada
        localStorage.setItem("CrudLocal",JSON.stringify(this.productos))

        this.productoSeleccionado = new Producto
      }
    }
  }
  borrarProducto(productoEntrada: Producto): void{
    if (confirm("¿Desea Borrar la Producto la con titutlo '"+ productoEntrada.nombre)){
      for (let i in this.productos){
        if(this.productos[i].id == productoEntrada.id){
          delete this.productos[i]
          localStorage.setItem("CrudLocal",JSON.stringify(this.productos))
          

          this.productoSeleccionado = new Producto
        }
      }
    }
      
  }

}

