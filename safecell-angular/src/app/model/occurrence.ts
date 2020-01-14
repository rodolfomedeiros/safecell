import * as moment from 'moment';

const F_DATE_DATABASE = 'DD/MM/YYYY HH:mm';
const F_VIEW_DATE = 'DD/MM/YYYY HH:mm:ss';
const F_TIME = 'HH:mm';
const F_DATE = 'DD/MM/YYYY';

export class Occurrence {

    id: number;
    bo: string;
    imei1: string;
    imei2: string;
    data: string;
    horario: string;
    quantIndividuos: number;
    tipoVeiculo: number;
    tipoArma: number;
    status: boolean;
    idUser: number;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    cep: string;
    lat: number;
    log: number;

    constructor(init?: Partial<Occurrence>) {
        Object.assign(this, init);
    }

    public setDataToString() {
        this.data != null ? moment(this.data).format(F_DATE) : null;
        console.log(this.data);
    }

    public setHorarioToString() {
        return this.horario != null ? moment(this.horario).format(F_TIME) : null;
    }
}
