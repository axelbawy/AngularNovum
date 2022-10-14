import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subcategori } from './subcategori';
import { SubcategoriaService } from './subcategoria.service';

@Component({
  selector: 'app-elformsub',
  templateUrl: './elformsub.component.html',
  styleUrls: ['./elformsub.component.css']
})
export class ElformsubComponent implements OnInit {

  subcategorias: Subcategori[]=[];
  public subcategoria:Subcategori = new Subcategori();

  constructor(private subcatoService:SubcategoriaService,private router:Router) { }

  ngOnInit(): void {
  }
  public eliminar():void{
    this.subcatoService.eliminar(this.subcategoria).subscribe(
      response=> this.router.navigate(['/subcategoria'])
    )

    Swal.fire('subcategoria Guardado',`subcategoria ${this.subcategoria.id_subcategoria} guardo con exito`,'success')
    console.log(this.subcategoria)
  }

}
