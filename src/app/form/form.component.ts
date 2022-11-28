import { Component } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  tipo: string = 'ing';
  descriptionInput: string;
  valueInput: number;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  tipoOperacion(event: Event) {
    this.tipo = (event.target as HTMLInputElement).value;
  }

  agregarValor() {
    if (this.tipo === 'ing') {
      this.ingresoService.ingresos.push(new Ingreso(this.descriptionInput, this.valueInput));
    } else {
      this.egresoService.egresos.push(new Egreso(this.descriptionInput, this.valueInput));
    }
  }
}
