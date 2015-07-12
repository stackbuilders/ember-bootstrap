import { moduleForModel, test } from 'ember-qunit';
import TooltipsService from 'ember-bootstrap/models/tooltips-service'

module('tooltips-service', 'Unit | Model | tooltips service', {
  unit: true
});

test('it exists', function(assert) {
  var model = TooltipsService.create();
  // var store = this.store();
  assert.ok(!!model);
});

test('addTooltip adds a tooltip to the tooltips collection', function(assert) {
  assert.expect(3);

  var model = TooltipsService.create();
  assert.equal(model.get('tooltips').length, 0);

  model.addTooltip({ elementId: 'ember-view-01',  title: 'This is a Test'});

  assert.equal(model.get('tooltips').length, 1);

  model.addTooltip({ elementId: 'ember-view-02',  title: 'This is another Test'});

  assert.equal(model.get('tooltips').length, 2);
});

test('removeTooltip removes a tooltip from the tooltips collection', function(assert) {
  assert.expect(3);

  var model = TooltipsService.create();
  model.set('tooltips', Ember.A([
    { elementId: 'ember-view-01',  title: 'This is a Test'},
    { elementId: 'ember-view-02',  title: 'This is another Test'},
    { elementId: 'ember-view-03',  title: 'Remove me'}
  ]));

  assert.equal(model.get('tooltips').length, 3);

  model.removeTooltip('ember-view-03');

  assert.equal(model.get('tooltips').length, 2);
  assert.equal(model.get('tooltips').findBy('elementId', 'ember-view-03'), null);
});
