import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-elformpro',
  templateUrl: './elformpro.component.html',
})
export class ElformproComponent implements OnInit {
  public producto:Producto = new Producto();
  constructor(private productoService:ProductoService,private router:Router) { }

  ngOnInit(): void {
  }
  public eliminar():void{
    this.productoService.eliminar(this.producto).subscribe(
      response=> this.router.navigate(['/productos'])
    )
    Swal.fire('producto Eliminado',`categoria ${this.producto.nombre} Elimino con exito`,'success')
    console.log(this.producto)
  }
}
