import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Reporteria } from './reporteria';
import { ReporteriaService } from './reporteria.service';
@Component({
  selector: 'app-list-form-rep',
  templateUrl: './list-form-rep.component.html',
  styleUrls: ['./list-form-rep.component.css']
})
export class ListFormRepComponent implements OnInit {

  reporterias: Reporteria[]=[];
  constructor(private reporteriaService:ReporteriaService,private router:Router) { }

  ngOnInit(): void {
    this.reporteriaService.getReporteria().subscribe(
      reporterias => this.reporterias=reporterias
    );
  }

}
