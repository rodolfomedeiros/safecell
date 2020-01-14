import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Observable} from 'rxjs';

import { AuthService } from '../../global-services/auth.service';
import { User } from '../../model/user';
import { SettingsService } from 'src/app/global-services/settings.service';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  emitCreateUser = new EventEmitter();

  urlInternNew = 'home/conta/new';

  urlNew = `${environment.API}user/save`;
  urlUpdate = `${environment.API}user/update`;
  urlDelete = `${environment.API}user/delete`;

  urlGetAllUsers = `${environment.API}user/users`;
  urlGetUser = `${environment.API}user/user`;

  users: User[];

  constructor(
    private settings: SettingsService,
    private authService: AuthService,
    private http: HttpClient
  ) { }


  // HTTPS

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlGetAllUsers, httpOptions)
      .pipe(
        map(data => this.users = data)
      );
  }

  public getUser(idUser: number): User {
    return this.users.find(u => u.id == idUser);
  }

  public getUserDB(idUser: number): Observable<User> {
    return this.http.get<User>(`${this.urlGetUser}/${idUser}`, httpOptions);
  }

  // save new user
  public save(user: User): Observable<User> {
    return this.http.post<User>(this.urlNew, user, httpOptions);
  }

  // update user
  public update(user: User): Observable<User> {
    return this.http.put<User>(this.urlUpdate, user, httpOptions);
  }

  // delete user
  public delete(idUser: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.urlDelete}/${idUser}`, httpOptions);
  }

  // UTILS

  public onFilter(filter: any): User[] {
    if (filter == '') {
      return this.users;
    } else {
      return this.users.filter(
        user => user.nome.toLocaleLowerCase().includes(filter)
          || user.email.toLocaleLowerCase().includes(filter)
      );
    }
  }
}
