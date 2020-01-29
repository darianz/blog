import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog by Idan and Ron';
  posts;
  constructor(private data: DataService) {}
  // ngOnInit()  {
    
  //   this.fetchData()
  // }

  // fetchData(){
  //   this.data.fetchPosts().subscribe(posts => {
  //     this.posts = posts;
  //   });
  // }
}