import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostController extends Controller {
  sayHello() {
    alert('hello');
  }

  @tracked name;
  @tracked comment;

  @action
  submitAction(ev) {
    ev.preventDefault();
    alert(`${this.name}: ${this.comment}`);
  }

  title = 'My Blog Post';
  body = 'This is the body of my blog post';
  authors = ['William', 'Robert', 'Michelle'];
  created = new Date();
  comments = [
    { name: 'Mike Smith', comment: 'Thanks for the great post' },
    { name: 'John Doe', comment: 'Nice Post!' },
    { name: 'Jeff Williams', comment: 'Good job!' },
  ];
}
