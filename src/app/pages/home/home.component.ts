import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { PostModule } from 'src/app/post/post.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.posts = this.data.getPosts();
    console.log(this.posts);
  }

}
