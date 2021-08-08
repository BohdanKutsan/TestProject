import { Component, OnInit } from '@angular/core';
import { AuthService } from 'C:/Users/K_Bog/source/repos/TestClient/src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

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

  register() {
    if(this.form.valid) {
      
      this.as.register(this.form.value.email, this.form.value.password)
       .subscribe(res => {
         alert('Ви успішно зареєстровані. Тепер можете увійти')
         this.router.navigate([''])

       }, error => {
       alert('Користувач з таким Email вже існує')
    })
    }
    this.form.reset()
  }

}
