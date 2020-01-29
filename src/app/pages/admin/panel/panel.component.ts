import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { PostModule } from 'src/app/post/post.module';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  loading = false;
  posts = [];
  maxSections = [];
  isFetching = false;
  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.fetchData();
    // this.loadedPosts = this.data.posts;

  }

  async fetchData(){
    this.loading = true;

    try {

      await this.data.fetchPosts().subscribe(posts => {
       this.posts = posts;
       this.maxSections = Array(PostModule.maxSections).fill('').map((x,i)=>i + 1);
      });
      this.loading = false;
    } catch (err) {
      console.log(err)
    }
  }

 

  editPost(post) {
    console.log(post);
    
  }
}
