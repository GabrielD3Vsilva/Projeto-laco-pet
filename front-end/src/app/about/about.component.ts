import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service'; // Importe o serviço

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  myObject: any;

  constructor(private router: Router, private dataService: DataService) {
    this.myObject = this.dataService.getObject();
    console.log(this.myObject)}


    handleClick ( ) {
      this.dataService.setObject({name: this.myObject.name});
      this.router.navigate(['indexUser']);
    }


}
