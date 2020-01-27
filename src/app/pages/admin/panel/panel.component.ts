import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  posts = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.posts = this.data.getPosts();
    
  }

  editPost(post) {
    console.log(post);
    
  }

}
