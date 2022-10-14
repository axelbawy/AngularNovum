import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subcategori } from './subcategori';
import { SubcategoriaService } from './subcategoria.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class ListFormsubComponent implements OnInit {

  subcategorias: Subcategori[]=[];
  public subcategoria:Subcategori = new Subcategori();

  constructor(private subcatoService:SubcategoriaService,private router:Router) { }

  ngOnInit(): void {
    this.subcatoService.getSubCategoria().subscribe(
      subcategorias => this.subcategorias=subcategorias
    );
  }
  public create():void{
    this.subcatoService.create(this.subcategoria).subscribe(
      response=> this.router.navigate(['/subcategoria'])
    )

    Swal.fire('subcategoria Guardado',`subcategoria ${this.subcategoria.id_subcategoria} guardo con exito`,'success')
    console.log(this.subcategoria)
  }

}
