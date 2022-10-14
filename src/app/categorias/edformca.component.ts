import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-edformca',
  templateUrl: './edformca.component.html',
})
export class EdformcaComponent implements OnInit {
  public categoria:Categoria = new Categoria();
  constructor(private categoriaservice:CategoriasService,private router:Router) { }

  ngOnInit(): void {
  }
  public Editar():void{
    this.categoriaservice.editar(this.categoria).subscribe(
      response=> this.router.navigate(['/categoria'])
    )
    Swal.fire('categoria Actualizad',`categoria ${this.categoria.nombre} Actualizo con exito`,'success')
    console.log(this.categoria)
  }
}
