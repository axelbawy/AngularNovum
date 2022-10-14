import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-crform',
  templateUrl: './crform.component.html',
 
})
export class CrformComponent implements OnInit {
  clientes: Cliente[]=[];
  public cliente:Cliente = new Cliente();
  constructor(private clienteservice:ClienteService,private router:Router,private clienteService:ClienteService) { }

  ngOnInit(): void {
  }
  public create():void{
    this.clienteservice.create(this.cliente).subscribe(
      response=> this.router.navigate(['/clientes'])
    )

    Swal.fire('Cliente Guardado',`Cliente ${this.cliente.nombre_cliente} guardo con exito`,'success')
    console.log(this.cliente)
  }
}
