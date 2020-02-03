import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModule } from '../util/post.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  post: PostModule;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(param => {
      let title = param.get('title');
      if (title) {
        this.post = this.service.getArticle(title);
        console.log(this.post);
      }
    });
    
  }

}