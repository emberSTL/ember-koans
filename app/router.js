import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('static-model');
  this.route('dynamic-model', { path: 'dynamic/:dynamic_id' });
  this.route('query-params-model');
});

export default Router;
