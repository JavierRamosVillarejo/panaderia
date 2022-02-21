import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';
const url = "http://localhost/backpanaderia/producto/"

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  leerProductos():Observable<any>{
    return this.http.get(url + "list/")
  }
  leerProducto():Observable<any>{
    return this.http.get(url)
  }
  insertarProducto(producto: Producto): Observable<any>{
    return this.http.post(url,producto)
  }
  borrarProducto(id: number): Observable<any>{
    return this.http.delete(url+id)
  }
  editarProducto(producto: Producto): Observable<any>{
    return this.http.put(url,producto)
  }
  subirImagen(entrada): Observable<any>{
    return this.http.post(url+'image/', entrada) 
  }
  buscarProductos(entrada: string): Observable<any>{
    return this.http.get(url+"?busqueda="+entrada)
  }
}
