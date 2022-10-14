import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from './categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-elformca',
  templateUrl: './elformca.component.html',
})
export class ElformcaComponent implements OnInit {
  public categorias:Categoria = new Categoria();
  constructor(private categoriaservice:CategoriasService,private router:Router) { }

  ngOnInit(): void {
  }
  public eliminar():void{
    this.categoriaservice.eliminar(this.categorias).subscribe(
      response=> this.router.navigate(['/categoria'])
    )
    Swal.fire('categoria Eliminado',`categoria ${this.categorias.nombre} Elimino con exito`,'success')
    console.log(this.categorias)
  }
}
