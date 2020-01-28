import { Component, OnInit, Input } from '@angular/core';
import { PostModule } from '../post/post.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() post: PostModule;
  @Input() main: boolean;

  constructor() {  }

  ngOnInit() {
    console.log(this.post);
    

  }

}
