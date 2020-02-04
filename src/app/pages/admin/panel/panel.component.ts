import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PostModule } from 'src/app/pages/util/post.module';
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
  confirmAnswer: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.posts = this.dataService.posts;
    this.maxSections = Array(PostModule.maxSections).fill('').map((x,i)=>i + 1);
    
  }

  // async fetchData(){
  //   this.loading = true;

  //   try {

  //     await this.data.fetchPosts().subscribe(posts => {
  //      this.posts = posts;
  //     });
  //     this.loading = false;
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

 

  

  deletePost(post:PostModule){
    this.confirmAnswer = confirm('Confirm Delete Post');
    if (this.confirmAnswer) {
      this.dataService.deletePost(post.id);
      location.reload();
    }
    
  }
}
