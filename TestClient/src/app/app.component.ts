import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[
        Validators.email,
        Validators.required
        ] ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  public get isLoggedIn() : boolean {
    return this.as.isAuthenticated()
  }

  constructor(private as: AuthService, private router: Router){

  }

  login() {
    if(this.form.valid) {
      const fromData = {...this.form.value}
      console.log('Form = ', fromData.email, fromData.password)
      this.as.login(this.form.value.email, this.form.value.password)
       .subscribe(res => {
       }, error => {
       alert('Неправильні логін чи пароль')
    })
    }
    this.form.reset()
  }

  logout() {
    this.as.logout();
  }

  registerPage(){
    this.router.navigate(['/register'])
  }
}
