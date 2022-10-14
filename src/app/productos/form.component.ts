import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponentPro implements OnInit {
  productos: Producto[]=[];
  public producto:Producto = new Producto();
  public titulo:string="Crear Producto";
  constructor(private productoService:ProductoService,private router:Router,private productoservice:ProductoService) { }

  ngOnInit(): void {
    this.productoservice.getProductos().subscribe(
      productos => this.productos=productos
    );
  }
  public create():void{
    this.productoService.create(this.producto).subscribe(
      response=> this.router.navigate(['/productos'])
    )

    Swal.fire('producto Guardado',`producto ${this.producto.nombre} guardo con exito`,'success')
    console.log(this.producto)
  }
}
