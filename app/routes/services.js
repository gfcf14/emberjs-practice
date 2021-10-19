import Ember from 'ember';
// import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model: function () {
    return ['PC Repair', 'Network Diagnostics', 'Home Audio Install'];
  },
});
