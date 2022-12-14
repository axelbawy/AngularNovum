import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from './producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint:string='http://localhost:8080/api/productos';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getProductos():Observable <Producto[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Producto[]));
  }

  create(producto:Producto):Observable<Producto[]>{
      return this.http.post<Producto[]>(this.urlEndPoint,producto,{headers:this.httpHeaders})
  }
  editar(producto:Producto){
    const path =`${this.urlEndPoint}/${producto.id_producto}` ;
    return this.http.put<Producto>(path,producto)
  }

  eliminar(producto:Producto){
    const path =`${this.urlEndPoint}/${producto.id_producto}` ;
    return this.http.delete(path);
  }
}
