import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',

})
export class FormComponent implements OnInit {
  clientes: Cliente[]=[];
  public cliente:Cliente = new Cliente();
  public titulo:string="Crear Cliente";
  constructor(private clienteservice:ClienteService,private router:Router,private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes=clientes
    );
  }
  public create():void{
    this.clienteservice.create(this.cliente).subscribe(
      response=> this.router.navigate(['/clientes'])
    )

    Swal.fire('Cliente Guardado',`Cliente ${this.cliente.nombre_cliente} guardo con exito`,'success')
    console.log(this.cliente)
  }

}
