import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado,Sexo } from '../interfaces/empleado';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrl: './listado-empleado.component.css'
})
export class ListadoEmpleadoComponent {
  nuevo: IEmpleado = {
    numEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: new Date(),
    sexo: Sexo.Masculino
  };

  empleados: IEmpleado[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  eliminarEmpleado(numEmpleado: number): void {
    this.empleadosService.eliminarEmpleado(numEmpleado);
    this.empleados = this.empleadosService.empleados;
    this.nuevo = {
      numEmpleado: this.empleadosService.obtenerProximoNumeroEmpleado(),
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: new Date(),
      sexo: Sexo.Masculino
    };
  }
  
}
