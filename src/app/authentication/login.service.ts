import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  passState: boolean = false;
  loggin: boolean = false;
  register: boolean = false;
  switchState(event: any) {
    this.passState = event.home;
    this.loggin = event.loggin;
    this.register = event.register;
  }

  constructor() {}
}
