import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { PostModule } from 'src/app/post/post.module';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  loading = false;
  post: PostModule;
  postForm: FormGroup;
  section = this.fb.group({
    sectionTitle: [''],
    sectionImg: [''],
    sectionContent: ['', [Validators.required]],
  });

  constructor(private service: DataService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      author: [0],
      sections: this.fb.array([this.section]),
    });

    this.route.paramMap.subscribe(param => {
      let id = param.get('id');
      if (id) {
        this.post = this.service.posts[id];
        this.openSections(this.post.sections.length);
        this.postForm.patchValue({... this.post});
      }
    });
  }

  openSections(amount) {
    for (let i = 0; i < amount - 1; i++) {
      this.addSection();
    }
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

  setId() {
    if (this.post) {
      return this.post.id
    }else {
      return ''
    }
  }

  async submit() {
    this.loading = true;
    const formvalue = this.postForm.value
    const id = this.setId();
    
    const post = new PostModule(id, formvalue.title, formvalue.thumbnail, formvalue.author, formvalue.sections)
    
    try {
      await this.service.inputPost(post);
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  }



}
