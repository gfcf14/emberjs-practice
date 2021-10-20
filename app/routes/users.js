import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model = () => {
    const url = 'https://api.github.com/users';
    return fetch(url).then((data) => data.json());
  };
}
