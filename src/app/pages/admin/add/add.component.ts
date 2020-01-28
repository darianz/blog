import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { PostModule } from 'src/app/post/post.module';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  loading = false;
  postForm: FormGroup;
  section = this.fb.group({
    sectionTitle: [''],
    sectionImg: [''],
    sectionContent: ['', [Validators.required]],
  });

  constructor(private service: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      author: [0],
      sections: this.fb.array([this.section]),
    });

  }


  get sectionForms() {
    return this.postForm.get('sections') as FormArray
  }

  addSection() {
    const section = this.fb.group({
      sectionTitle: [''],
      sectionImg: [''],
      sectionContent: ['', [Validators.required]],
    });

    this.sectionForms.push(section)
  }

  removeSection(i) {
    this.sectionForms.removeAt(i);
  }

  async submit() {
    this.loading = true;

    const formvalue = this.postForm.value
    console.log(formvalue);
    const post = new PostModule(formvalue.title, formvalue.thumbnail, formvalue.author, formvalue.sections)
    console.log(post);
    
    try {
      // await this.service.addPost(formvalue)
    } catch (err) {

    }
  }



}
