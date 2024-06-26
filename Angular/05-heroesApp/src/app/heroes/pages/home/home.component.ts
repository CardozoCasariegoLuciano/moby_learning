import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Iauth} from 'src/app/auth/interfaces/auth.interface';
import {AuthService} from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin: 15px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {
  
  get userLogued() {
    return this.authService.getUserLogued
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("userID")
    this.router.navigate(["/auth/login"])
  }

}
