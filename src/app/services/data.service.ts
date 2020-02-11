import { Injectable } from '@angular/core';
import { PostModule } from 'src/app/pages/util/post.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: Array<PostModule> = [];
  loaded = false;
  loadedPosts: PostModule[] = [];

  _posts = [];


  constructor(private http: HttpClient,
    private localstorageService: LocalstorageService) {
    this._posts = this.localstorageService.getValue('posts') || [];
  }

  inputPost(post) {
    if (!this.checkExist(post.id)) {
      this.addPost(post);
    } else {
      this.editPost(post);
    }
  }

  editPost(post) {
    this.http.put(`https://blog-842ac.firebaseio.com/blog/posts/${post.id}.json`,post).subscribe(
      (error) => console.log(error)
    );
  }

  getArticle(string) {
    const title = string.split('_').join(' ');
    let p: PostModule;

    this._posts.forEach((post, i) => {
      if (this._posts[i].title === title) { 
        p = this._posts[i];
      }
    });

    return p;
  }

  addPost(post) {
    this.http.post(
      'https://blog-842ac.firebaseio.com/blog/posts.json',
      post
    ).subscribe(responseData => {
      if (responseData.hasOwnProperty(name)) {
        console.log(responseData);

      }
    });
  }


  getPosts() {
    return this.http
      .get('https://blog-842ac.firebaseio.com/blog/posts.json')
      .pipe(
        map(responseData => {
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              const check = this.checkExist(key);
              if (!check) {
                let data = responseData[key]
                this.posts.push(new PostModule(key, data.title, data.thumbnail, data.author, data.sections))
              }
              // postsArray.push({ ...responseData[key], id: key });
            }
          }
          return this.posts;
        })
      );
  }

  fetchPosts() {
    this.getPosts().subscribe(
      (posts) => {
        console.log('posts:', posts)
        if (this._posts.length === 0 || JSON.stringify(posts) !== JSON.stringify(this._posts)) {
          console.log("posts were changed");
          this.localstorageService.setValue('posts', posts);
          this._posts = posts || [];
        }
      },
      (err) => {
        console.log(err)
      },
      () => {
        this.loaded = true;
      });
  }

  deletePost(key) {
    console.log("key is:" + key);
    this.http.delete(`https://blog-842ac.firebaseio.com/blog/posts/${key}.json`).subscribe(
      (error) => console.log(error)
    );
  }

  checkExist(id) {
    let flag = false;
    this.posts.forEach((v, i) => {
      if (this.posts[i].id === id) {
        flag = true
      }
    });
    return flag
  }
}