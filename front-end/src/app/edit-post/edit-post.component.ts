import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl }from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  myObject;

  constructor(private router: Router, private dataService: DataService) {
    this.myObject = this.dataService.getObject();
  }

  formulario = new FormGroup({
    image: new FormControl(''),
    description: new FormControl(''),
  });

  back( ) {
    this.dataService.setObject({name: this.myObject.name})
    this.router.navigate(['viewMyPosts'])
  }

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

  async onSubmit ( ) {

    await axios.post('http://localhost:8080/editPost', JSON.stringify({name: this.myObject.name, indexToArray: this.myObject.index, image: this.formulario.value.image, description: this.formulario.value.description}), {
      headers: {"Content-Type": "application/json"}
    }).then((response)=>{this.dataService.setObject({name: this.myObject.name});this.router.navigate(['viewMyPosts'])}).catch((err)=>console.log(err));

  }

}
