import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
@Component({
  selector: 'app-crformpro',
  templateUrl: './crformpro.component.html',
})
export class CrformproComponent implements OnInit {
  productos: Producto[]=[];
  public producto:Producto = new Producto();
  constructor(private router:Router,private productoService:ProductoService) { }


  ngOnInit(): void {
  }
  public create():void{
    this.productoService.create(this.producto).subscribe(
      response=> this.router.navigate(['/productos'])
    )

    Swal.fire('Producto Guardado',`Producto ${this.producto.nombre} guardo con exito`,'success')
    console.log(this.producto)
  }
}
