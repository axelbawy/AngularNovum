import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FichaSocioeconomicaService } from './ficha-socioeconomica.service';
import { fichasocio } from './fichasocio';

@Component({
  selector: 'app-listformfs',
  templateUrl: './listformfs.component.html',
  styleUrls: ['./listformfs.component.css']
})
export class ListformfsComponent implements OnInit {
  fichasocio: fichasocio[]=[];
  constructor(private fichasocioService:FichaSocioeconomicaService,private router:Router) { }

  ngOnInit(): void {
    this.fichasocioService.getFicha().subscribe(
      fichasocio => this.fichasocio=fichasocio
    );
  }

}
