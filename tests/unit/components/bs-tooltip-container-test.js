import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('bs-tooltip-container', 'Unit | Component | bs tooltip container', {
  needs: ['component:bs-tooltip'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('addTooltip adds a tooltip to the tooltips collection', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component.get('tooltips').length, 0);

  component.addTooltip({ elementId: 'ember-view-01',  title: 'This is a Test'});

  assert.equal(component.get('tooltips').length, 1);

  component.addTooltip({ elementId: 'ember-view-02',  title: 'This is another Test'});

  assert.equal(component.get('tooltips').length, 2);
});

test('removeTooltip removes a tooltip from the tooltips collection', function(assert) {
  assert.expect(3);

  var component = this.subject();
  component.set('tooltips', Ember.A([
    { elementId: 'ember-view-01',  title: 'This is a Test'},
    { elementId: 'ember-view-02',  title: 'This is another Test'},
    { elementId: 'ember-view-03',  title: 'Remove me'}
  ]));

  assert.equal(component.get('tooltips').length, 3);

  component.removeTooltip('ember-view-03');

  assert.equal(component.get('tooltips').length, 2);
  assert.equal(component.get('tooltips').findBy('elementId', 'ember-view-03'), null);
});
