import { Injectable } from '@angular/core';
import { PostModule } from './post/post.module';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts: Array<PostModule> = [];
  loadedPosts: PostModule[] = [];

  data = [{
    id: 0,
    title: 'Tittle Here',
    thumbnail: 'https://cdn-images-1.medium.com/max/1000/0*g1vBU2ytNv0JwV69.png',
    author: 0,
    date: 'Oct 18, 2019',
    sections: [
      {
        subtittle: 'Some subTittle for first section',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
      {
        subtittle: 'another subtittle',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
    ]
  },
  {
    id: 1,
    title: 'Another tittle here',
    thumbnail: 'https://cdn-images-1.medium.com/max/1000/0*g1vBU2ytNv0JwV69.png',
    author: 0,
    date: 'Oct 09, 2025',
    sections: [
      {
        subtittle: 'Some subTittle for first section',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
      {
        subtittle: 'another subtittle',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
    ]
  },
  {
    id: 2,
    title: 'Another tittle here',
    thumbnail: 'https://cdn-images-1.medium.com/max/1000/0*g1vBU2ytNv0JwV69.png',
    author: 0,
    date: 'Oct 09, 2025',
    sections: [
      {
        subtittle: 'Some subTittle for first section',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
      {
        subtittle: 'another subtittle',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
    ]
  },
  {
    id: 3,
    title: 'Another tittle here',
    thumbnail: 'https://cdn-images-1.medium.com/max/1000/0*g1vBU2ytNv0JwV69.png',
    author: 0,
    date: 'Oct 09, 2025',
    sections: [
      {
        subtittle: 'Some subTittle for first section',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
      {
        subtittle: 'another subtittle',
        content: 'If you want to become a professional software developer, you’ll need to become familiar with GitHub.',
        img: ''
      },
    ]
  },

  ]
  constructor(private http: HttpClient) { }

  dataToModule() {
    this.data.forEach((value, index) => {
      let id = this.data[index].id;
      let title = this.data[index].title;
      let thumbnail = this.data[index].thumbnail;
      let author = this.data[index].author
      let date = this.data[index].date
      let sections = this.data[index].sections

      this.posts.push(new PostModule('', title, thumbnail, author, sections))
    })
  }

  //in the future should return observable from firebase
  getPosts() {
    if (this.posts.length === 0) {
      this.dataToModule();
    }
    return this.posts;
  }

  addPost(post) {
    // this.posts.push(post);
    this.http.post(
      'https://blog-842ac.firebaseio.com/posts.json',
      post
    ).subscribe(responseData => {
      if (responseData.hasOwnProperty(name)) {
        console.log(responseData);
      
      }
    });

  }

  fetchPosts() {

    return this.http
      .get('https://blog-842ac.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          const testArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              console.log(responseData);

              let data = responseData[key]
              testArray.push(new PostModule(key, data.title, data.thumbnail, data.author, data.sections))
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return testArray;
        })
      );


  }


}

/*
 dataToModule() {
    this.data.forEach((value, index) => {
      let id = this.data[index].id;
      let title = this.data[index].title;
      let thumbnail = this.data[index].thumbnail;
      let author = this.data[index].author
      let date = this.data[index].date
      let sections = this.data[index].sections

      this.posts.push(new PostModule(title, thumbnail, author, date, sections))
    })
  }
*/
