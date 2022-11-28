import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresoService: EgresoService) {}

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.value / this.ingresoTotal;
  }
}
