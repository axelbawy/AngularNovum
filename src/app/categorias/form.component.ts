import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponentCat implements OnInit {
  categorias: Categoria[]=[];
  public categoria:Categoria = new Categoria();
  constructor(private categoriaservice:CategoriasService,private router:Router,private categoriaService:CategoriasService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categorias => this.categorias=categorias
    );
  }
  public create():void{
    this.categoriaService.create(this.categoria).subscribe(
      response=> this.router.navigate(['/categoria'])
    )

    Swal.fire('Categoria Guardado',`Categoria ${this.categoria.nombre} guardo con exito`,'success')
    console.log(this.categoria)
  }


}
