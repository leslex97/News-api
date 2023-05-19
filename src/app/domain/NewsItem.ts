export class NewsItem {

    setAuthor(user: any) {
      return this.author = user;
    }


    id: Number;
    title: String;
    header: String;
    content: String;
    author: String;
    img: String;


    constructor() {
    this.id = 0;
    this.title = "";
    this.header = "";
    this.content = "";
    this.author = "";
    this.img = "";

    }
    }