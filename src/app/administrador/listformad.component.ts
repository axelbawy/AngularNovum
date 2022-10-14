import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevoUsuario } from '../inicioSesion/nuevo-usuario';
import { administrador } from './administador';
import { AdministradoService } from './administrado.service';

@Component({
  selector: 'app-listformad',
  templateUrl: './listformad.component.html',
  styleUrls: ['./listformad.component.css']
})
export class ListformadComponent implements OnInit {
  administradores: NuevoUsuario[]=[];
  public administador:NuevoUsuario = new NuevoUsuario("","","","");
  public titulo:string="Crear Cliente";
  constructor(private adminService:AdministradoService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.getUser().subscribe(
      administradores => this.administradores=administradores
    );
  }
  public create():void{
    this.adminService.create(this.administador).subscribe(
      response=> this.router.navigate(['/clientes'])
    )

    Swal.fire('administador Guardado',`administador ${this.administador.nombreUsuario} guardo con exito`,'success')
    console.log(this.administador)
  }
}
