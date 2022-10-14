import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subcategori } from './subcategori';
@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  private urlEndPoint:string='http://localhost:8080/api/subcategoria';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getSubCategoria():Observable <Subcategori[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Subcategori[]));
  }

  create(subcategori:Subcategori):Observable<Subcategori[]>{
      return this.http.post<Subcategori[]>(this.urlEndPoint,subcategori,{headers:this.httpHeaders})
  }
  editar(subcategori:Subcategori){
    const path =`${this.urlEndPoint}/${subcategori.id_subcategoria}` ;
    return this.http.put<Subcategori>(path,subcategori)
  }

  eliminar(subcategori:Subcategori){
    const path =`${this.urlEndPoint}/${subcategori.id_subcategoria}` ;
    return this.http.delete(path);
  }
}
