export class User {

  id: number;
  nome: string;
  email: string;
  senha: string;
  matricula: string;
  cpf: string;
  nascimento: string;
  telefone: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  complemento: string;
  numero: string;
  cep: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

}
