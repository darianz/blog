import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Blog by Idan and Ron';
  loaded = false;
  
  constructor(private data: DataService) { }
              
  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.data.fetchPosts();
  }
}