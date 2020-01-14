import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { ContaService } from '../conta.service';
import { User } from '../../../model/user';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  providers: [MessageService]
})
export class ListaComponent implements OnInit, OnDestroy {

  users: User[];

  sub: Subscription;

  constructor(
    private contaService: ContaService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private toast: MessageService
  ) { }

  ngOnInit() {
    this.sub = this.activedRoute.params.subscribe(
      _ => {
        this.contaService.getAllUsers().subscribe(
          data => this.users = data
        );
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onFilter(filter: string) {
    this.users = this.contaService.onFilter(filter);
  }

  public edit(id: number) {
    this.router.navigate([this.contaService.urlInternNew, id]);
  }

  public delete(id: number) {
    if (this.contaService.getUser(id)) {
      this.contaService.delete(id).subscribe(
        data => {
          if (data) {
            this.contaService.getAllUsers().subscribe(
              data2 => this.users = data2
            );
            this.showSuccess();
          } else {
            this.showError();
          }
        },
        error => this.showError()
      );
    }
  }

  showSuccess() {
    this.toast.add({ severity: 'success', summary: 'Usuário deletado!', detail: 'Um usuário foi deletado...' });
  }

  showError() {
    this.toast.add({ severity: 'error', summary: 'Erro!', detail: 'O usuário não foi deletado...' });
  }
}
