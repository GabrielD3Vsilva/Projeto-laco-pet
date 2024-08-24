import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-index-to-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index-to-adm.component.html',
  styleUrl: './index-to-adm.component.css'
})
export class IndexToAdmComponent {
  posts: any[] = [];

  ngOnInit(): void {
    // Lógica de inicialização aqui
    axios.post('http://localhost:8080/returnPosts')
    .then((response)=>this.posts = response.data)
    .catch((err)=>console.log(err));

  }


  aprove(index: Number ):void {
      axios.post('http://localhost:8080/aprovePost', JSON.stringify({indexToArray: index}), {
      headers: {"Content-type": "application/json"}
     })
    .then((response)=>{ console.log('aprovado'); location.reload( )})
    .catch((err)=>console.log(err));
  }

  reprove(index: Number):void {
    axios.post('http://localhost:8080/reprovePost', JSON.stringify({indexToArray: index}), {
      headers: {"Content-type": "application/json"}
     })
    .then((response)=>{ console.log('reprovado'); location.reload( )})
    .catch((err)=>console.log(err));
  }

}
