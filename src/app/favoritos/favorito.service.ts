import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Favorito } from './favorito';
@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private urlEndPoint:string='http://localhost:8080/api/favoritos';
  private urlEndPoint2:string='http://localhost:8080/api/crearfavoritos';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getFavoritos():Observable <Favorito[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Favorito[]));
  }

  create(favorito:Favorito):Observable<Favorito[]>{
      return this.http.post<Favorito[]>(this.urlEndPoint2,favorito,{headers:this.httpHeaders})
  }
  editar(favorito:Favorito){
    const path =`${this.urlEndPoint}/${favorito.id_favoritos}` ;
    return this.http.put<Favorito>(path,favorito)
  }

  eliminar(favorito:Favorito){
    const path =`${this.urlEndPoint}/${favorito.id_favoritos}` ;
    return this.http.delete(path);
  }
}
