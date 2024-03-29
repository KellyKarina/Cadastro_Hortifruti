import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  senha: string = "";

  isFormValid(): boolean {
    return this.email !== '' && this.senha !== '';
  }
}
