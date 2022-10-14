import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Favorito } from './favorito';
import { FavoritoService } from './favorito.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class ListFormfavComponent implements OnInit {

  favoritos: Favorito[]=[];
  public favorito:Favorito = new Favorito();
  public titulo:string="Crear Favorito";
  constructor(private favoritoService:FavoritoService,private router:Router) { }

  ngOnInit(): void {
    this.favoritoService.getFavoritos().subscribe(
      favoritos => this.favoritos=favoritos
    );
  }
  public create():void{
    this.favoritoService.create(this.favorito).subscribe(
      response=> this.router.navigate(['/favoritos'])
    )

    Swal.fire('favorito Guardado',`favorito ${this.favorito.id_favoritos} guardo con exito`,'success')
    console.log(this.favorito)
  }

}
