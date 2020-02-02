import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { PostModule } from 'src/app/pages/util/post.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = true;
  posts: Array<PostModule>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.fetchData();
    
  }

  async fetchData(){
    this.loading = true;

    try {

      await this.data.fetchPosts().subscribe(posts => {
       this.posts = posts;
       this.loading = false;
      });
    } catch (err) {
      console.log(err)
    }
  }

  titleToUrl(title) {
    return title.split(' ').join('_');
  }

}
