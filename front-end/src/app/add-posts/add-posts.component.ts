import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { DataService } from '../data.service'; // Importar seu serviço aqui

@Component({
  selector: 'app-add-posts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {


  constructor(private router: Router, private dataService: DataService) {
    
     console.log(this.dataService.getObject().name);
    
  }

   handleClick() {
    this.router.navigate(["/register"]);
  }

  formulario = new FormGroup({
    description: new FormControl(''),
    image: new FormControl() // O FormControl vai armazenar a string base64
  });

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Converte o arquivo para base64 e armazena no FormControl
        const base64String = reader.result as string;
        this.formulario.patchValue({
          image: base64String
        });
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
    }
  }

  async onSubmit() {
    if (this.formulario.valid) {
      const apiUrl = 'http://localhost:8080/addPost';
      const object = {
        name: this.dataService.getObject().name,
        description: this.formulario.value.description,
        image: this.formulario.value.image // O campo agora contém a string base64 da imagem
      };

      console.log(object);

      // Enviar os dados para a API
      await axios.post(apiUrl, JSON.stringify(object), {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        console.log(response.data);
        this.dataService.setObject({ name: this.dataService.getObject().name });
        this.router.navigate(['indexUser']);
      }).catch((err) => {
        console.log(err);
      });


    }
  }
}
