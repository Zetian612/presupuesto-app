import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
    ingresos: Ingreso[] = [];

    constructor(private ingresoService: IngresoService) { }

    ngOnInit(): void {
        this.ingresos = this.ingresoService.ingresos;
    }

    eliminarRegistro(ingreso: Ingreso) {
        this.ingresoService.eliminar(ingreso);
    }
}
