import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { LoginService } from '../app/authentication/login.service';
import { AuthService } from './authentication/auth.service';
import { firebaseConfig } from './firebase.config';
import { MusicService } from './music/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'soundcloud';
  registerForm: any = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  loginForm: any = {
    email: '',
    password: '',
  };
  switchState: boolean = true;
  loginState: boolean = true;

  getData() {
    this.loggin();
    this.register();
    return this.loginService.passState;
  }

  loggin() {
    return this.loginService.loggin;
  }

  register() {
    console.log('log state', this.loginService.loggin);
    return this.loginService.register;
  }

  submitRegister() {
    this.authService.register(this.registerForm);
    this.loginService.passState = false;
    this.loginService.register = false;
  }

  submitLogin() {
    this.authService.login(this.loginForm);
    this.loginService.passState = false;
    this.loginService.loggin = false;
  }

  showPlayer() {
    return this.musicService.isPlayerOn;
  }

  reloadPage() {
    window.location.reload();
  }

  constructor(
    private loginService: LoginService,
    private musicService: MusicService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
