import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private myObject: any;

  setObject(obj: any) {
    this.myObject = obj;
  }

  getObject() {
    return this.myObject;
  }
}