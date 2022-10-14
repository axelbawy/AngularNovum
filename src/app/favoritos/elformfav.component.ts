import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Favorito } from './favorito';
import { FavoritoService } from './favorito.service';

@Component({
  selector: 'app-elformfav',
  templateUrl: './elformfav.component.html',
  styleUrls: ['./elformfav.component.css']
})
export class ElformfavComponent implements OnInit {

  favoritos: Favorito[]=[];
  public favorito:Favorito = new Favorito();
  public titulo:string="Crear Favorito";
  constructor(private favoritoService:FavoritoService,private router:Router) { }

  ngOnInit(): void {
  }
  public eliminar():void{
    this.favoritoService.eliminar(this.favorito).subscribe(
      response=> this.router.navigate(['/favoritos'])
    )

    Swal.fire('favorito editado',`favorito ${this.favorito.id_favoritos} editado con exito`,'success')
    console.log(this.favorito)
  }

}
