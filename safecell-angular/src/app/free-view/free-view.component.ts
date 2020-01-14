import { MessageService } from 'primeng/api';
import { ContaService } from './../home/conta/conta.service';
import { Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-free-view',
  templateUrl: './free-view.component.html',
  styleUrls: ['./free-view.component.scss'],
  providers: [MessageService]
})
export class FreeViewComponent implements OnInit {

  constructor(
    private router: Router,
    private contaService: ContaService,
    private toast: MessageService
  ) { }

  ngOnInit() {
    this.router.navigate(['free/login']);

    this.contaService.emitCreateUser.subscribe(
      data => this.showSuccess()
    );
  }

  showSuccess() {
    this.toast.add({ severity: 'success', summary: 'Usuário Criado!', detail: 'Um novo usuário foi adicionado...' });
  }
}
