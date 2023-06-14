import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-estudiante-detail',
  templateUrl: './estudiante-detail.component.html',
  styleUrls: [ './estudiante-detail.component.css' ]
})
export class EstudianteDetailComponent implements OnInit {
  estudiante: Estudiante | undefined;

  constructor(
    private route: ActivatedRoute,
    private estudianteService: EstudianteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEstudiante();
  }

  getEstudiante(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estudianteService.getEstudiante(id)
      .subscribe(estudiante => this.estudiante = estudiante);
  }

  goBack(): void {
    this.location.back();
  }
}