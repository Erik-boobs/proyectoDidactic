import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { Instructor1Component } from './components/instructor1/instructor1.component';
import { Instructor2Component } from './components/instructor2/instructor2.component';
import { Instructor3Component } from './components/instructor3/instructor3.component';
import { HomeComponent } from './components/home/home.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AgregarAreaConocimientoComponent } from './components/agregar-area-conocimiento/agregar-area-conocimiento.component';
import { ValidarCursoComponent } from './components/validar-curso/validar-curso.component';
import { FormAgregarCursoComponent } from './components/form-agregar-curso/form-agregar-curso.component';
import { FormAgregarAreaConoComponent } from './components/form-agregar-area-cono/form-agregar-area-cono.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    AlumnosComponent,
    InstructorComponent,
    Instructor1Component,
    Instructor2Component,
    Instructor3Component,
    HomeComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    AgregarAreaConocimientoComponent,
    ValidarCursoComponent,
    FormAgregarCursoComponent,
    FormAgregarAreaConoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
