import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {
  constructor(private empleadosService: EmpleadosService){
    
  }

}
