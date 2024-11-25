import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PirmaryInputComponent } from '../../components/pirmary-input/pirmary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';


interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PirmaryInputComponent
  ],
  providers:[
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponet {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router, private loginService: LoginService, private toastService: ToastrService
  ) 
  {
    this.signupForm = new FormGroup ({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    if (this.signupForm.invalid) {
      this.toastService.error("Por favor, preencha todos os campos corretamente.");
      return;
    }
    const { name, email, password } = this.signupForm.value;
  
    if (!name || !email || !password) {
      this.toastService.error("Campos obrigatórios estão vazios.");
      return;
    }
    this.loginService.singup(name, email, password).subscribe({
      next: () => this.toastService.success("Usuário cadastrado com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde.")
    });
  }
  navigate() {
    this.router.navigate(["login"])
  }

}
