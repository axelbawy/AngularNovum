import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-elform',
  templateUrl: './elform.component.html',
})
export class ElformComponent implements OnInit {
  public cliente:Cliente = new Cliente();
  public titulo:string="Eliminar Cliente";
  constructor(private clienteservice:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }
  public eliminar():void{
    this.clienteservice.eliminar(this.cliente).subscribe(
      response=> this.router.navigate(['/clientes'])
    )
    Swal.fire('Cliente Eliminado',`Cliente ${this.cliente.nombre_cliente} Elimino con exito`,'success')
    console.log(this.cliente)
  }
}
