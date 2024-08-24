import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { RouterOutlet, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-view-posts',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './view-posts.component.html',
  styleUrl: './view-posts.component.css'
})
export class ViewPostsComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) {}

  posts: any[] = [];

  ngOnInit(): void {
    // Lógica de inicialização aqui
    axios.post('http://localhost:8080/returnAllPosts')
    .then((response)=>this.posts = response.data)
    .catch((err)=>console.log(err));

  }

  handleDetails(index: number): void {
    console.log('Índice do item:', index);

    this.dataService.setObject({index: index});
    this.router.navigate(['viewDetails']);
  }
}
