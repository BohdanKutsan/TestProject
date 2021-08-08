import { Component, OnInit } from '@angular/core';
import { AuthService } from 'C:/Users/K_Bog/source/repos/TestClient/src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private as: AuthService){

  }

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

}
