import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { Instructor3Component } from './components/instructor3/instructor3.component';
import { Instructor2Component } from './components/instructor2/instructor2.component';
import { Instructor1Component } from './components/instructor1/instructor1.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAreaConocimientoComponent } from './components/agregar-area-conocimiento/agregar-area-conocimiento.component';
import { FormAgregarAreaConoComponent } from './components/form-agregar-area-cono/form-agregar-area-cono.component';
import { FormAgregarCursoComponent } from './components/form-agregar-curso/form-agregar-curso.component';
import { ValidarCursoComponent } from './components/validar-curso/validar-curso.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'instructor1',component:Instructor1Component},
  {path:'instructor2',component:Instructor2Component},
  {path:'instructor3',component:Instructor3Component},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'signup',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'agregarAreaCono',component:AgregarAreaConocimientoComponent},
  {path:'formAgregarAreaCono',component:FormAgregarAreaConoComponent},
  {path:'formAgregarCurso',component:FormAgregarCursoComponent},
  {path:'validarCurso',component:ValidarCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
