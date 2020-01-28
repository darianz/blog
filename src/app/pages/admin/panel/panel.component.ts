import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
//import { subscribe } from 'rxjs/operators'; 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  posts = [];
  loadedPosts = [];
  isFetching = false;
  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.FetchData();

  }

  FetchData(){
    // this.loadedPosts = this.data.fetchPosts(); //RON
    this.data.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
     });
  }

 

  editPost(post) {
    console.log(post);
    
  }
}
