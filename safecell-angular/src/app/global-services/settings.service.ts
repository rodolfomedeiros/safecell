import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  idioma = 'pt';

  constructor() { }

  public getLocale() {
    return this.idioma;
  }
}
