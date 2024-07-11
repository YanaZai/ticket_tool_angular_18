import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ILogin } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginData: ILogin;

  private _authService = inject(AuthService);

  public ngOnInit(): void {
    this.loginData = {
      emailId: '',
      password: ''
    };
  }
  public onLogin(): void {
    console.log(this.loginData)

    this._authService.login(this.loginData)
      .pipe()
      .subscribe((resp: any) => {
        console.log(resp) //cors
      })
  }
}
