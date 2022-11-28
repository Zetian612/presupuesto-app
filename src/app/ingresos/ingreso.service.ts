import { Ingreso } from "./ingreso.model";

export class IngresoService {
    
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 45000),
        new Ingreso("Venta coche", 5000)
    ];

    eliminar(ingreso: Ingreso) {
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
    
}