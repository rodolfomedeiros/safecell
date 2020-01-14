import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../global-services/auth.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit( ) {
    this.router.navigate(['home', 'ocorrencia' , 'home']);
  }

}
