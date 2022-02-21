import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../clases/noticia';
const url = "http://localhost/backpanaderia/noticia/"

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  leerNoticias():Observable<any>{
    return this.http.get(url)
  }
  leerNoticia(id: number):Observable<any>{
    return this.http.get(url + id)
  }
  insertarNoticia(noticia: Noticia): Observable<any>{
    return this.http.post(url,noticia)
  }
  borrarNoticia(id: number): Observable<any>{
    return this.http.delete(url+id)
  }
  editarNoticia(noticia: Noticia): Observable<any>{
    return this.http.put(url,noticia)
  }
  subirImagen(entrada): Observable<any>{
    return this.http.post(url+'image/', entrada) 
  }
  buscarNoticias(entrada: string): Observable<any>{
    return this.http.get(url+"?busqueda="+entrada)
  }
}
