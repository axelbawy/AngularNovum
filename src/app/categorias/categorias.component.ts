import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[]=[];
  constructor(private categoriaservice:CategoriasService) { }

  ngOnInit(): void {
    this.categoriaservice.getCategorias().subscribe(
      categorias => this.categorias=categorias
    );

  }

}
