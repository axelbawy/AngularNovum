import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string='http://localhost:8080/api/cliente';
  private urlEndPoint2:string='http://localhost:8080/api/crearcliente';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getClientes():Observable <Cliente[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Cliente[]));
  }

  create(cliente:Cliente):Observable<Cliente[]>{
      return this.http.post<Cliente[]>(this.urlEndPoint2,cliente,{headers:this.httpHeaders})
  }
  editar(cliente:Cliente){
    const path =`${this.urlEndPoint}/${cliente.id_cliente}` ;
    return this.http.put<Cliente>(path,cliente)
  }

  eliminar(cliente:Cliente){
    const path =`${this.urlEndPoint}/${cliente.id_cliente}` ;
    return this.http.delete(path);
  }
}
