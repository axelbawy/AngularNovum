import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-edformpro',
  templateUrl: './edformpro.component.html',
})
export class EdformproComponent implements OnInit {
  public producto:Producto = new Producto();
  constructor(private productoService:ProductoService,private router:Router) { }

  ngOnInit(): void {
  }
  public Editar():void{
    this.productoService.editar(this.producto).subscribe(
      response=> this.router.navigate(['/productos'])
    )
    Swal.fire('producto Actualizad',`producto ${this.producto.nombre} Actualizo con exito`,'success')
    console.log(this.producto)
  }
}
