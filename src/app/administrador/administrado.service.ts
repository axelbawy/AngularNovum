import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { administrador } from './administador';
import { Logini } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { NuevoUsuario } from '../inicioSesion/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AdministradoService {

  private urlEndPoint:string='http://localhost:8080/auth/nuevo';
  private urlEndPoint2:string='http://localhost:8080/auth/usuarios';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getUser():Observable <NuevoUsuario[]>{
    return this.http.get(this.urlEndPoint2).pipe(map(response=>response as NuevoUsuario[]));
  }

  create(admin:NuevoUsuario):Observable<NuevoUsuario[]>{
      return this.http.post<NuevoUsuario[]>(this.urlEndPoint,admin,{headers:this.httpHeaders})
  }
  editar(admin:NuevoUsuario){
    const path =`${this.urlEndPoint}/${admin.nombreUsuario}` ;
    return this.http.put<NuevoUsuario>(path,admin)
  }

  eliminar(admin:NuevoUsuario){
    const path =`${this.urlEndPoint}/${admin.nombreUsuario}` ;
    return this.http.delete(path);
  }

  loginByEmail(form:Logini):Observable<ResponseI>{
    let direccion = this.urlEndPoint;
    return this.http.post<ResponseI>(direccion,form);
  }

}
