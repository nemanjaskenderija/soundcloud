import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { LoginService } from '../authentication/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isHome: boolean = false;
  isLogging: boolean = false;
  isRegister: boolean = false;

  sendPack: any = {
    loggin: this.isLogging,
    register: this.isRegister,
    home: this.isHome,
  };

  getData() {
    this.sendPack.home = true;
    this.loginService.switchState(this.sendPack);
  }

  logging() {
    this.sendPack.loggin = true;
    this.sendPack.register = false;
    this.getData();
  }

  hideAuth() {
    return this.authService.isUserLogged;
  }

  register() {
    this.sendPack.register = true;
    this.sendPack.loggin = false;
    this.getData();
  }

  reload() {
    window.location.reload();
  }

  constructor(
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
}
