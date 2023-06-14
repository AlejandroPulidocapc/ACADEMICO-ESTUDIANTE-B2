import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Estudiante } from './estudiante';
import { ESTUDIANTES } from './mock-estudiantes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class EstudianteService {

  constructor(private messageService: MessageService) { }

  getEstudiantes(): Observable<Estudiante[]> {
    const estudiantes = of(ESTUDIANTES);
    this.messageService.add('EstudianteService: fetched estudiantes');
    return estudiantes;
  }

  getEstudiante(id: number): Observable<Estudiante> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const estudiante = ESTUDIANTES.find(h => h.id === id)!;
    this.messageService.add(`EstudianteService: fetched estudiante id=${id}`);
    return of(estudiante);
  }
}