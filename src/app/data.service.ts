import { Injectable } from '@angular/core';
import { PostModule } from 'src/app/pages/util/post.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts: Array<PostModule> = [];
  loadedPosts: PostModule[] = [];



  constructor(private http: HttpClient) { }

  inputPost(post) {
    if (!this.checkExist(post.id)) {
      this.addPost(post);
    } else {
      this.editPost(post);
    }
  }

  editPost(post) {

  }

  getArticle(string) {
    const title = string.split('_').join(' ');
    let p: PostModule;
    this.posts.forEach((v, i) => {
      if (this.posts[i].title === title) {
        p = this.posts[i];
      }
    })
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

  fetchPosts() {
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