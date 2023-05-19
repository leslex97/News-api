export class CommentItem {
  id: Number;
  content: String;
  author: String;
  newsId: any;
  isEmpty: boolean;
  

  setAuthor(user: any) {
    return (this.author = user);
  }

  constructor() {
    this.id = 0;
    this.content = '';
    this.author = '';
    this.newsId = 0;
    this.isEmpty = false;
  }
}
