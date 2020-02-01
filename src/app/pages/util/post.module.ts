export class PostModule {
  id: string;
  title: string;
  thumbnail: string;
  author: number;
  date: string;
  sections: any = [];
  thumbnailBinding: string;
  static maxSections: number = 0;

  constructor(id: string, title: string, thumbnail: string, author: number, sections) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.author = author;
    this.date = this.getDate();
    this.sections = sections
    this.thumbnailBinding = this.combainString();
    PostModule.maxSections = this.isMax();
  }

  combainString = () => {
    return `url(${this.thumbnail})`;
  }

  getDate() {
    if (!this.date) {

      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      const mm = today.getMonth(); //January is 0!
      const yyyy = today.getFullYear();
      
      return `${months[mm]} ${dd}, ${yyyy}`
    }
  }

  //make a function to get static maxSection (maximum amount of sections for admin table)
  isMax() {
    return this.sections.length > PostModule.maxSections ? this.sections.length : PostModule.maxSections
  }

  //make a function to set athor's name + pic by id
}
