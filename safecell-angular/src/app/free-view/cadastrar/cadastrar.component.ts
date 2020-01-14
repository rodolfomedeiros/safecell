import { Location } from '@angular/common';
import { PasswordValidation } from './../../model/password-validator';
import { MessageService } from 'primeng/api';
import { ContaService } from './../../home/conta/conta.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  providers: [MessageService]
})
export class CadastrarComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contaService: ContaService,
    private toast: MessageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      confirmPassword: [null],
      telefone: [null, Validators.required],
      cpf: [null, Validators.required],
      nascimento: [null, Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      bairro: [null, Validators.required],
      rua: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null],
      cep: [null, Validators.required],
    },
    {
      validators: [PasswordValidation.MatchPassword]
    });
  }

  public save() {
    if (this.form.valid) {
      let user = new User(this.form.value);
      user.id = 0;

      if (this.form.get('senha').value != this.form.get('confirmPassword').value) {
        this.showErrorPassword();
        return;
      }

      this.contaService.save(user).subscribe(
        data => {
          if (data) {
            // this.showSuccess();
            this.contaService.emitCreateUser.emit(true);
            this.form.reset();
            this.location.back();
          } else {
            this.showError();
          }
        },
        error => this.showError()
      );
    } else {

      if (this.form.get('senha').value != this.form.get('confirmPassword').value) {
        this.showErrorPassword();
      } else {
        this.showError();
      }
    }
  }

 /*  showSuccess() {
    this.toast.add({ severity: 'success', summary: 'Usuário Criado!', detail: 'Um novo usuário foi adicionado...' });
  } */

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
