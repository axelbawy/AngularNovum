import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevoUsuario } from '../inicioSesion/nuevo-usuario';
import { administrador } from './administador';
import { AdministradoService } from './administrado.service';

@Component({
  selector: 'app-crformad',
  templateUrl: './crformad.component.html',
  styleUrls: ['./crformad.component.css']
})
export class CrformadComponent implements OnInit {
  administradores: NuevoUsuario[]=[];
  public administrador:NuevoUsuario = new NuevoUsuario("","","","");
  constructor(private adminService:AdministradoService,private router:Router) { }

  ngOnInit(): void {
  }
  public create():void{
    this.adminService.create(this.administrador).subscribe(
      response=> this.router.navigate(['/admin'])
    )

    Swal.fire('administrador Guardado',`administrador ${this.administrador.nombreUsuario} guardo con exito`,'success')
    console.log(this.administrador)
  }
}
