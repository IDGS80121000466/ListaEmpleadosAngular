import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  //Creamos la lista de empleados
  private _empleados: IEmpleado[] = [];
  private _ultimoNumeroEmpleado: number = 0;

  //Creamos un metodo get para acceder a la lista
  get empleados(): IEmpleado[]{
    return this._empleados
  }
  //Metodo para agregar un nuevo empleado a la lista
  agregarEmpleado(empleado: IEmpleado): void {
    this._ultimoNumeroEmpleado++;
    empleado.numEmpleado = this._ultimoNumeroEmpleado;
    this._empleados.push(empleado);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
    localStorage.setItem('ultimoNumeroEmpleado', this._ultimoNumeroEmpleado.toString());
  }

  obtenerProximoNumeroEmpleado(): number {
    if (this._empleados.length === 0) {
      return 1;
    }
    const maxNumEmpleado = Math.max(...this._empleados.map(emp => emp.numEmpleado));
    return maxNumEmpleado + 1;
  }
  
  eliminarEmpleado(numEmpleado: number): void {
    this._empleados = this._empleados.filter(emp => emp.numEmpleado !== numEmpleado);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() { 
    //Recuperamos la lista del localStorage
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
    this._ultimoNumeroEmpleado = parseInt(localStorage.getItem('ultimoNumeroEmpleado') || '0', 10);
  }
}
