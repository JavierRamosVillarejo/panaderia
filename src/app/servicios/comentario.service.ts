import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../clases/comentario';
const url = "http://localhost/backpanaderia/comentario/"

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  leerComentarios():Observable<any>{
    return this.http.get(url + "list/")
  }
  obtenerComentariosEnviados():Observable<any>{
    return this.http.get(url + "prod/")
  }
  insertarComentario(Comentario: Comentario): Observable<any>{
    return this.http.post(url,Comentario)
  }
  borrarComentario(id: number): Observable<any>{
    return this.http.delete(url+id)
  }
  editarComentario(Comentario: Comentario): Observable<any>{
    return this.http.put(url,Comentario)
  }
}
