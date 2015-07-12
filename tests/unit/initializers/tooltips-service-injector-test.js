import Ember from 'ember';
import { initialize } from '../../../initializers/tooltips-service-injector';
import { module, test } from 'qunit';

var container, application;

module('Unit | Initializer | Tooltips Service Injector', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

test('registers the tooltip service', function(assert) {
  assert.expect(1);
  initialize(container, application);
  let tooltipsService = container.lookup('service:tooltips');
  assert(tooltipsService.get('tooltips'), []);
});
