import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { administrador } from './administador';
import { AdministradoService } from './administrado.service';

@Component({
  selector: 'app-elformad',
  templateUrl: './elformad.component.html',
  styleUrls: ['./elformad.component.css']
})
export class ElformadComponent implements OnInit {
  administradores: administrador[]=[];
  public administrador:administrador = new administrador();
  constructor(private adminService:AdministradoService,private router:Router) { }

  ngOnInit(): void {
  }
 
}
