import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-crformca',
  templateUrl: './crformca.component.html',
})
export class CrformcaComponent implements OnInit {
  categorias: Categoria[]=[];
  public categoria:Categoria = new Categoria();
  constructor(private categoriaservice:CategoriasService,private router:Router) { }

  ngOnInit(): void {
  }
  public create():void{
    this.categoriaservice.create(this.categoria).subscribe(
      response=> this.router.navigate(['/categoria'])
    )

    Swal.fire('categoria Guardado',`categoria ${this.categoria.nombre} guardo con exito`,'success')
    console.log(this.categoria)
  }

}
