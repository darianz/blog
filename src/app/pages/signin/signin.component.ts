import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  //styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() { 
    this.authService.GoogleAuth();
  }

}