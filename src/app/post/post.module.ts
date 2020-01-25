



export class PostModule {
  title: string;
  subtitle: string;
  thumbnailDescription: string;
  id: string;
  author: string;
  datePublished: string;
  sectionsList: any = [];
  sectionsTitleList: any = [];

  constructor(title: string, subtitle: string, thumbnailDescription: string, author: string){
    this.title = title;
    this.subtitle = subtitle;
    this.thumbnailDescription = thumbnailDescription;
    this.author = author;
  }
 }
