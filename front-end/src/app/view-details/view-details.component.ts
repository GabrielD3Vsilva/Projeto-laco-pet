import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import axios from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})

export class ViewDetailsComponent {
  myObject: any;
  posts: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
    this.myObject = this.dataService.getObject();
    console.log(this.myObject);
  }

  ngOnInit(): void {
    // Lógica de inicialização aqui
    axios.post('http://localhost:8080/returnAllPosts')
    .then((response)=>{this.posts = response.data; console.log(response.data);console.log(this.posts[this.myObject.index])})
    .catch((err)=>console.log(err));
  }

  redirectToBack( ) {
    this.router.navigate(['viewPosts'])
  }

}
