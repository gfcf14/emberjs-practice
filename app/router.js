import EmberRouter from '@ember/routing/router';
import config from 'emberjs-practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact');
  this.route('services');

  this.route('posts', function () {
    this.route('new');
  });
  this.route('events');
});
