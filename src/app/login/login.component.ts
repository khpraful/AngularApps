import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'praful'
  password = ''
  loginError = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {

  }

  handleJWTAuthLogin() {
    //console.log(this.username)
    //console.log(this.password)
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(

      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },

      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleBasicAuthLogin() {
    //console.log(this.username)
    //console.log(this.password)
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(

      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },

      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}
