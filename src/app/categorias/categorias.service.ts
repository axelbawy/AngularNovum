import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private urlEndPoint:string='http://localhost:8080/api/categoria';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getCategorias():Observable <Categoria[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Categoria[]));
  }

  create(categoria:Categoria):Observable<Categoria[]>{
      return this.http.post<Categoria[]>(this.urlEndPoint,categoria,{headers:this.httpHeaders})
  }
  editar(categoria:Categoria){
    const path =`${this.urlEndPoint}/${categoria.id_categoria}` ;
    return this.http.put<Categoria>(path,categoria)
  }

  eliminar(categoria:Categoria){
    const path =`${this.urlEndPoint}/${categoria.id_categoria}` ;
    return this.http.delete(path);
  }
}
