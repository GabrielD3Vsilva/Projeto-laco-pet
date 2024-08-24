import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common'
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-show-deleted',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './show-deleted.component.html',
  styleUrl: './show-deleted.component.css'
})
export class ShowDeletedComponent {
  myObject: any;

  constructor(private router: Router, private dataService: DataService) {
    this.myObject = this.dataService.getObject();
    console.log(this.myObject);
  }

  goToBack( ) {
    this.dataService.setObject({name: this.myObject.name})
    this.router.navigate(['viewMyPosts'])
  }
}
