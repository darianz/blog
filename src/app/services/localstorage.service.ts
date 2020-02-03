import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setValue(key: string, value: any) {
    value = (value === undefined) ? '' : JSON.stringify(value);
    window.localStorage.setItem(key, value);
  }

  getValue(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    else {
      return null;
    }
  }
}
