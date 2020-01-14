import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { User } from '../model/user';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  urlAuth = `${environment.API}user/auth`;

  home = 'home';

  constructor(
    private router: Router,
    private http: HttpClient,
    private active: ActivatedRoute,
  ) {
    this.active.params.subscribe(
      _ => this.user = null
    );
  }

  //
  public isLogado(): boolean {
    return this.user != null;
  }

  public isAdmin(): boolean {
    if (this.isLogado()) {
      return this.getUser().matricula != null;
    }

    return false;
  }

  public logout() {
    this.user = null;
    this.router.navigate(['/']);
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(user: User){
    this.user = user;
  }

  public getId(): number {
    return this.user != null ? this.user.id : 0;
  }

  // HTTP

  public auth(form: FormGroup): Observable<User> {
    return this.http.post<User>(this.urlAuth, form.value, httpOptions);
  }
}
