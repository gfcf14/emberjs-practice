import Controller from '@ember/controller';

export default class PostController extends Controller {
  title = 'My Blog Post';
  body = 'This is the body of my blog post';
  authors = ['William', 'Robert', 'Michelle'];
  comments = [
    { name: 'Mike Smith', comment: 'Thanks for the great post' },
    { name: 'John Doe', comment: 'Nice Post!' },
    { name: 'Jeff Williams', comment: 'Good job!' },
  ];
}
