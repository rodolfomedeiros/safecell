import { Component, OnInit } from '@angular/core';

import { PasswordValidation } from './../../../model/password-validator';
import { MessageService } from 'primeng/api';
import { OcorrenciaService } from '../ocorrencia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Occurrence } from 'src/app/model/occurrence';
import { AuthService } from 'src/app/global-services/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  providers: [MessageService]
})
export class CadastrarComponent implements OnInit {

  form: FormGroup;
  occurrence: Occurrence;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private ocorrenciaService: OcorrenciaService,
    private toast: MessageService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      bo: [null],
      imei1: [null, Validators.required],
      imei2: [null, Validators.required],
      data: [null, Validators.required],
      horario: [null, Validators.required],
      quantIndividuos: [null, Validators.required],
      tipoVeiculo: ['', Validators.required],
      tipoArma: ['', Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      bairro: [null, Validators.required],
      rua: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null],
      cep: [null, Validators.required],
    });
  }

  save() {
    if (this.form.valid) {
      if (this.occurrence == null) {
        this.occurrence = new Occurrence(this.form.value);
        this.occurrence.id = 0;
        this.occurrence.idUser = this.authService.getUser().id;

        console.log(this.occurrence);
        this.ocorrenciaService.save(this.occurrence).subscribe(
          data => {
            console.log(data);
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
      this.showError();
    }
  }

  // TOASTS

  showSuccess() {
    this.toast.add({ severity: 'success', summary: 'Ocorrência Criada!', detail: 'Uma nova ocorrência foi adicionada...' });
  }

  showError() {
    this.toast.add(
      {
        severity: 'error',
        summary: 'Erro',
        detail: '1- Preencha todos campos. 2- Imei1 ou imei2 já cadastrados!'
      });
  }

}
