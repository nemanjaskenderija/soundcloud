import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isHome: boolean = false;

  getData() {
    this.isHome = true;
    this.loginService.switchState(this.isHome);
  }

  constructor(private loginService: LoginService) {}
  ngOnInit(): void {}
}
