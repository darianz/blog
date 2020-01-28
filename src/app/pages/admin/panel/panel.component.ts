import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
//import { subscribe } from 'rxjs/operators'; 
import { HttpClient } from '@angular/common/http';
import { PostModule } from 'src/app/post/post.module';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  loadedPosts = [];
  maxSections = [];
  isFetching = false;
  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.FetchData();
  }

  FetchData(){
    this.data.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.maxSections = Array(PostModule.maxSections).fill('').map((x,i)=>i + 1);
     });
  }

 

  editPost(post) {
    console.log(post);
    
  }
}
