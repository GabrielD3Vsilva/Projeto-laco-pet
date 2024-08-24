import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl }from '@angular/forms';
import axios from 'axios';
import { DataService } from '../data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  title = 'front-end';

  constructor(private router: Router, private dataService: DataService) {}

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
        this.dataService.setObject({name: response.data});
        if(response.data == 'Aliny Melquiades') {
          this.router.navigate(['indexToAdm']);
        } else {
          this.router.navigate(['about']);
        }
      }).catch ((err)=>{
        console.log(err)
      })


    }}

}