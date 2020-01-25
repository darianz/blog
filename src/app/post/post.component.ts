import { Component, OnInit } from '@angular/core';
import { PostModule } from '../post/post.module';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  testpost: PostModule;
  title: string;
  subtitle: string;
  thumbnailDescription: string;
  id: string;
  author: string;
  datePublished: string;

  constructor() {

    this.testpost = new PostModule("TestTitle", "TestSubtitle", "Test Thumbnail Desc", "Test author");
  }

  ngOnInit() {

    this.title = this.testpost.title;
    this.subtitle = this.testpost.subtitle;
    this.thumbnailDescription = this.testpost.thumbnailDescription;
    this.author = this.testpost.author;

    console.log(this.testpost);
    
  }

}
