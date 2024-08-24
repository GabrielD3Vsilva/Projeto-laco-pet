import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-my-posts',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './view-my-posts.component.html',
  styleUrl: './view-my-posts.component.css'
})

export class ViewMyPostsComponent {
  myObject;
  posts: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
    this.myObject = this.dataService.getObject();
    console.log(this.myObject);
  }

   ngOnInit(): void {
    // Lógica de inicialização aqui
     axios.post('http://localhost:8080/returnPostsToUser', JSON.stringify({name: this.myObject.name}), {
      headers: {"Content-Type": "application/json"}
    })
    .then((response)=>this.posts = response.data)
    .catch((err)=>console.log(err));
  }

  handleDetails(index: number): void {
    console.log('Índice do item:', index);

    this.dataService.setObject({index: index});
    this.router.navigate(['viewMyPosts']);
  }

  handleEdit(index: number): void {
    this.dataService.setObject({name: this.myObject.name, index: index});
    this.router.navigate(['editPost'])
  }

   handleDelete(index: number): void {
     axios.post('http://localhost:8080/deletePost', JSON.stringify({name: this.myObject.name, indexToArray: index}), {
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => {
      console.log('Post deletado com sucesso!');
      this.dataService.setObject({name: this.myObject.name});
      // Recarregar a página
      this.router.navigate(['showDeleted'])
    })
    .catch((err) => console.log(err));
  }
  


}
