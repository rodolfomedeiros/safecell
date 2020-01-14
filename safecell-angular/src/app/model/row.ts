import { Point } from './point';

export class Row {
    dia: number;
    points: Point[];

    constructor() {
        this.dia = 0;
        this.points = new Array<Point>(3);
    }

    /* getTimePoint(turno: number, situacao: number): Observable<string> {
        // entrada
        if (situacao == 1) {
            return new Observable((observer) => {
                console.log((this.points[turno - 1] != null && this.points[turno - 1] != undefined) ? this.points[turno - 1] : null);
                // tslint:disable-next-line:max-line-length
                observer.next(null);
            });
        } else if (situacao == 2) {
            return new Observable((observer) => {
                console.log((this.points[turno - 1] != null && this.points[turno - 1] != undefined) ? this.points[turno - 1] : null);
                // tslint:disable-next-line:max-line-length
                observer.next(null);
            });
        }
    } */

    getTimePoint(turno: number, situacao: number): string {
        // entrada
        if (situacao == 1) {
            return (this.points[turno - 1] != null && this.points[turno - 1] != undefined) ? this.points[turno - 1].getTimeEntrada() : null;
        } else if (situacao == 2) {
            return (this.points[turno - 1] != null && this.points[turno - 1] != undefined) ? this.points[turno - 1].getTimeSaida() : null;
        }
    }

    setRow(dia: number, values: Point[]) {
        this.dia = dia;
        for (let i = 1; i <= 3; i++) {
            let point = (values != null && values != []) ? values.find(p => p.turno == i) : undefined;
            this.points[i - 1] = point != undefined ? new Point(point) : null;
        }
    }
}
