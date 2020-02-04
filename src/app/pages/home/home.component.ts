import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PostModule } from 'src/app/pages/util/post.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.posts = this.dataService.posts
  }

  titleToUrl(title) {
    return title.split(' ').join('_');
  }

}
