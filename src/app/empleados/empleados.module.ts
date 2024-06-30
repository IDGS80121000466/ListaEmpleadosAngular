import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { ListadoEmpleadoComponent } from './listado-empleado/listado-empleado.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    AgregarEmpleadoComponent,
    ListadoEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginaInicioComponent,
    AgregarEmpleadoComponent,
    ListadoEmpleadoComponent
  ],
  providers:[
    EmpleadosService
  ]
})
export class EmpleadosModule { }
