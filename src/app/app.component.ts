import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog by Idan and Ron';
  loaded = false;
  constructor(private data: DataService) { }
  ngOnInit() {

    this.fetchData()
  }

  async fetchData() {
    try {
      await this.data.fetchPosts().subscribe(posts => {
        this.loaded = true;
      });
      this.loaded = false;
    } catch (err) {
      console.log(err)
    }
  }
}