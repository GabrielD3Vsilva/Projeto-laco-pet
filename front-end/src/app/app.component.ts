import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl }from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'front-end';

  constructor(private router: Router) {}

  handleClick( ) {
    this.router.navigate(["/register"]);
  }

  formulario = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  async onSubmit() {
    if (this.formulario.valid) {
      const apiUrl = 'http://localhost:8080/login';
      const object = {
        name: this.formulario.value.name,
        password: this.formulario.value.password
      };

      // Enviar os dados para a API
      await axios.post(apiUrl, JSON.stringify(object), {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response)=>{
        console.log(response.data);
        this.router.navigate(["/about"]);
      }).catch ((err)=>{
        console.log(err)
      })


    }}

}
