import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { fichasocio } from './fichasocio';
@Injectable({
  providedIn: 'root'
})
export class FichaSocioeconomicaService {
  private urlEndPoint:string='http://localhost:8080/api/fichaSocio';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getFicha():Observable <fichasocio[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as fichasocio[]));
  }

  create(fichasocioe:fichasocio):Observable<fichasocio[]>{
      return this.http.post<fichasocio[]>(this.urlEndPoint,fichasocioe,{headers:this.httpHeaders})
  }
  editar(fichasocioe:fichasocio){
    const path =`${this.urlEndPoint}/${fichasocioe.id_ficha}` ;
    return this.http.put<fichasocio>(path,fichasocioe)
  }

  eliminar(fichasocioe:fichasocio){
    const path =`${this.urlEndPoint}/${fichasocioe.id_ficha}` ;
    return this.http.delete(path);
  }
}
