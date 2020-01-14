import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mes } from '../../model/mes';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../global-services/auth.service';
import { Occurrence } from 'src/app/model/occurrence';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  urlGetOccurrence = `${environment.API}occurrence`;
  urlGetOccurrences = `${environment.API}occurrence/ocorrencias`;
  urlOccurrenceSave = `${environment.API}occurrence/save`;


  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  // PUT

  // save occurrence
  public save(o: Occurrence): Observable<Occurrence> {
    return this.http.put<Occurrence>(this.urlOccurrenceSave, o, httpOptions);
  }

  // GET

  public onSearch(search: string): Observable<Occurrence> {
    return this.http.get<Occurrence>(`${this.urlGetOccurrence}/${search}`, httpOptions);
  }

  public getAll(): Observable<Occurrence[]> {
    return this.http.get<Occurrence[]>(`${this.urlGetOccurrences}`, httpOptions);
  }
}
