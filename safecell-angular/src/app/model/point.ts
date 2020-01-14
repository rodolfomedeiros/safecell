import { Turno } from './enum/turno.enum';
import * as moment from 'moment';

const F_DATE_DATABASE = 'DD/MM/YYYY HH:mm';
const F_VIEW_DATE = 'DD/MM/YYYY HH:mm:ss';
const F_TIME = 'HH:mm';
const F_DATE = 'DD/MM/YYYY';

export class Point {

    id: number;
    turno: Turno;
    dia: number;
    mes: number;
    ano: number;
    entrada: string;
    saida: string;
    idUser: number;

    constructor(init?: Partial<Point>) {
        Object.assign(this, init);
    }

    static getDiff(s: string, e: string): number {
        const start = moment(s, F_DATE_DATABASE);
        const end = moment(e, F_DATE_DATABASE);

        return end.diff(start, 'minutes', true);
    }

    public getTimeEntrada(): string {
        return this.entrada != null ? moment(this.entrada, F_DATE_DATABASE).format(F_TIME) : null;
    }

    public getTimeSaida(): string {
        return this.saida != null ? moment(this.saida, F_DATE_DATABASE).format(F_TIME) : null;
    }

    getDiffDate(): number {
        if (this.entrada != null && this.saida != null) {
            const start = moment(this.entrada, F_DATE_DATABASE);
            const end = moment(this.saida, F_DATE_DATABASE);

            return end.diff(start, 'hours', true);
        }

        return 0;
    }
}
