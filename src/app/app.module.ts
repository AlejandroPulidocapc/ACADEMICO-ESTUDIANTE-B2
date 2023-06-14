import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudianteDetailComponent } from './estudiante-detail/estudiante-detail.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { EstudianteSearchComponent } from './estudiante-search/estudiante-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EstudiantesComponent,
    EstudianteDetailComponent,
    MessagesComponent,
    EstudianteSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }