import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado, Sexo } from '../interfaces/empleado';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {
  nuevo: IEmpleado = {
    numEmpleado: 0,
    nombre: '',
    correo: '',
    telefono: '',
    fechaNacimiento: new Date(),
    sexo: Sexo.Masculino
  };

  mostrarFormulario: boolean = false;

  constructor(private empleadosService: EmpleadosService) {
    this.nuevo.numEmpleado = this.empleadosService.obtenerProximoNumeroEmpleado();
  }

  agregar(): void {
    if (!this.nuevo.nombre.trim()) {
      alert("El nombre es obligatorio");
      return;
    }
    if (!this.nuevo.correo.trim() || !this.validarCorreo(this.nuevo.correo)) {
      alert("Correo no valido");
      return;
    }
    if (!this.nuevo.telefono.trim()) {
      alert("El teléfono es obligatorio");
      return;
    }
  
    this.empleadosService.agregarEmpleado(this.nuevo);
    this.nuevo = {
      numEmpleado: this.empleadosService.obtenerProximoNumeroEmpleado(),
      nombre: '',
      correo: '',
      telefono: '',
      fechaNacimiento: new Date(),
      sexo: Sexo.Masculino
    };
    this.mostrarFormulario = false;

    console.log("Formulario enviado");
  }

  validarCorreo(correo: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(correo);
  }

  mostrarOcultarFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
    if (!this.mostrarFormulario) {
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
}
