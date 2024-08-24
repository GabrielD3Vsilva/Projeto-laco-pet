import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-index-to-user',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './index-to-user.component.html',
  styleUrl: './index-to-user.component.css'
})

export class IndexToUserComponent {
  myObject;

  constructor(private router: Router, private dataService: DataService) {
    this.myObject = this.dataService.getObject();
  }

  goToViews ( ) {
    this.router.navigate(['viewPosts']);
  }

  goToAdd ( ) {
    this.dataService.setObject({name: this.myObject.name});
    this.router.navigate(['addPost']);
  }

  backToAbout ( ) {
    this.dataService.setObject({name: this.myObject.name});
    this.router.navigate(['about']);
  }

  backToLogin ( ) {
    this.router.navigate(['']);
  }

  goToMyPosts ( ) {
    this.router.navigate(['viewMyPosts']);
  }

}
