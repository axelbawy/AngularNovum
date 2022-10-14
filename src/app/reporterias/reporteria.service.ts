import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Reporteria } from './reporteria';
@Injectable({
  providedIn: 'root'
})
export class ReporteriaService {
  private urlEndPoint:string='http://localhost:8080/api/reporteria';
  private httpHeaders =new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getReporteria():Observable <Reporteria[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response=>response as Reporteria[]));
  }
}
