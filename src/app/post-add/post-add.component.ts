import { Component, OnInit } from '@angular/core';
import { PostModule } from '../post/post.module';
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  // testpost: PostModule = new PostModule("1","2");
  sectionsList: any = [];
  sectionsTitleList: any = [];
  title: string = "Section Title";
  mainTitle: string = "Main Title";
  subTitle: string = " subtitle";
  constructor() { }

  ngOnInit() {
  }

  onAddSection() {
    console.log("add section button");
  }

  addSection() {
    
    this.sectionsList.push('section' + (this.sectionsList.length + 1));
    this.sectionsTitleList.push('sectionTitle' + (this.sectionsList.length + 1));

  }
  removeSection(index) {
    this.sectionsList.splice(index, 1);
    this.sectionsTitleList.splice(index, 1);
  }
  //This is not the way to get template reference
  //you need #title in html and you get it with title.value
  onUpdateTitleName(event: Event){
    this.title = (<HTMLInputElement>event.target).value;
  }

  onUpdateMainTitleName(event: Event){
    this.mainTitle = (<HTMLInputElement>event.target).value;
    // this.testpost.title = (<HTMLInputElement>event.target).value;
  }

  onUpdateSubtitleName(event: Event){
    this.subTitle = (<HTMLInputElement>event.target).value;
    // this.testpost.subtitle = (<HTMLInputElement>event.target).value;

  }

  onSubmit(){
    console.log("pita");
    // console.log(this.testpost);
    console.log(this.sectionsList);
    console.log(this.sectionsTitleList);

  }

}
