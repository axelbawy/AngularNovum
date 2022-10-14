import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-edform',
  templateUrl: './edform.component.html',

})
export class EdformComponent implements OnInit {
  public cliente:Cliente = new Cliente();
  public titulo:string="Editar Cliente";
  constructor(private clienteservice:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }
  public Editar():void{
    this.clienteservice.editar(this.cliente).subscribe(
      response=> this.router.navigate(['/clientes'])
    )
    Swal.fire('Cliente Actualizad',`Cliente ${this.cliente.nombre_cliente} Actualizo con exito`,'success')
    console.log(this.cliente)
  }
}
