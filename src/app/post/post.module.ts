export class PostModule {
  id: number;
  title: string;
  thumbnail: string;
  author: number;
  date: string;
  sections: any = [];
  thumbnailBinding: string;

  constructor(title: string, thumbnail: string, author: number, date, sections) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.author = author;
    this.date = date;
    this.sections = sections
    this.thumbnailBinding = this.combainString();
  }

  combainString = () => {
    return `url(${this.thumbnail})`;
  }
}
