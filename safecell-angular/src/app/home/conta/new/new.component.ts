import { PasswordValidation } from './../../../model/password-validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../../global-services/auth.service';
import { ContaService } from '../conta.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [MessageService]
})
export class NewComponent implements OnInit {

  form: FormGroup;
  user: User;

  sub: Subscription;

  constructor(
    public authService: AuthService,
    private contaService: ContaService,
    private formBuilder: FormBuilder,
    private toast: MessageService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      senha: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      telefone: [null, Validators.required],
      matricula: [null, Validators.required]
    });

    this.form.setValidators(PasswordValidation.MatchPassword);
  }
  // SERVICES

  public save() {
    if (this.form.valid) {
      if (this.user == null) {

        this.user = new User(this.form.value);
        this.user.id = 0;

        this.contaService.save(this.user).subscribe(
          data => {
            if (data) {
              this.showSuccess();
            } else {
              this.showError();
            }

            this.form.reset();
          },
          error => this.showError()
        );
      }
    } else {
      if (this.form.get('senha').value != this.form.get('confirmPassword').value) {
        this.showErrorPassword();
      } else {
        this.showError();
      }
    }
  }

  // TOASTS

  showSuccess() {
    this.toast.add({ severity: 'success', summary: 'Usuário Criado!', detail: 'Um novo usuário foi adicionado...' });
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
