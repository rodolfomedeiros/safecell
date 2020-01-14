import { ContaService } from './../../home/conta/conta.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { AuthService } from '../../global-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toast: MessageService,
    private router: Router
  ) { }

  ngOnInit() {

    // init form
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    });

  }

  onLogin() {
    if (this.form.valid) {
      this.authService.auth(this.form).subscribe(
        data => {
          this.authService.user = data;

          if (this.authService.getUser()) {
            this.router.navigate([this.authService.home]);
          } else {
            this.showError();
          }
        },
        error => this.showError()
      );
    } else {
      this.toast.add(
        {
          severity: 'error',
          summary: 'Erro',
          detail: 'Preencha todos campos'
        }
      );
    }
  }

  showError() {
    this.toast.add(
      {
        severity: 'error',
        summary: 'Erro',
        detail: '1- Preencha todos campos. 2- Email ou senha incorretos'
      }
    );
  }
}
