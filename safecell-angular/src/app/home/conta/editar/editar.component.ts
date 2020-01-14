import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordValidation } from 'src/app/model/password-validator';
import { MessageService } from 'primeng/api';
import { ContaService } from '../conta.service';
import { AuthService } from 'src/app/global-services/auth.service';
import { User } from 'src/app/model/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers: [MessageService]
})
export class EditarComponent implements OnInit {

  form: FormGroup;
  user: User;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private contaService: ContaService,
    private toast: MessageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.form = this.formBuilder.group({
      nome: [this.user.nome, Validators.required],
      email: [this.user.email, Validators.required],
      senha: [this.user.senha, Validators.required],
      confirmPassword: [this.user.senha],
      telefone: [this.user.telefone, Validators.required],
      matricula: [this.user.matricula],
      cpf: [this.user.cpf],
      nascimento: [this.user.nascimento],
      estado: [this.user.estado],
      cidade: [this.user.cidade],
      bairro: [this.user.bairro],
      rua: [this.user.rua],
      numero: [this.user.numero],
      complemento: [this.user.complemento],
      cep: [this.user.cep],
    },
      {
        validators: [PasswordValidation.MatchPassword]
      });
  }

  public save() {
    let id = this.user.id;
    let user = new User(this.form.value);
    user.id = id;

    if (this.form.get('senha').value != this.form.get('confirmPassword').value) {
      this.showErrorPassword();
      return;
    }

    this.contaService.update(user).subscribe(
      data => {
        if (data) {
          this.showSuccess();
          this.authService.setUser(data);
        } else {
          this.showError();
        }
      },
      error => this.showError()
    );
  }

  showSuccess() {
    this.toast.add(
      {
        severity: 'success',
        summary: 'Usuário Alterado!',
        detail: 'usuário foi modificado!'
      });
  }

  showError() {
    this.toast.add(
      {
        severity: 'error',
        summary: 'Erro',
        detail: '1- Preencha todos campos. 2- Email já está em uso.'
      });
  }

  showErrorPassword() {
    this.toast.add(
      {
        severity: 'error',
        summary: 'Erro',
        detail: '1- Senha não confere.'
      });
  }
}
