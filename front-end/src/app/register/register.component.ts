import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl }from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  constructor(private router: Router) {}

  handleClick( ) {
    this.router.navigate(["/"]);
  }

  formulario = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  async onSubmit() {
    if (this.formulario.valid) {
      const apiUrl = 'http://localhost:8080/register';
      const object = {
        name: this.formulario.value.name,
        email: this.formulario.value.email,
        password: this.formulario.value.password,
        confirmPassword: this.formulario.value.confirmPassword
      };

      // Enviar os dados para a API
      await axios.post(apiUrl, JSON.stringify(object), {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response)=>{
        console.log(response.data);
        this.router.navigate(["/"]);
      }).catch ((err)=>{
        console.log(err)
      })


    }}
}
