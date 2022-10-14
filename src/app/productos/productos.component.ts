import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',

})
export class ProductosComponent implements OnInit {
  productos: Producto[]=[];
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos => this.productos=productos
    );
  }

}
