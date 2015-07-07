import { moduleForComponent, test } from 'ember-qunit';

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

test('addTooltip adds a tooltip', function(assert) {
  assert.expect(3);

  var component = this.subject();
  assert.equal(component.get('tooltips.length'), 0);
  Ember.run(() => {
    component.addTooltip({ elementId: 'ember-view-01',  title: 'This is a Test'});
  });

  assert.equal(component.get('tooltips.length'), 1);

  Ember.run(() => {
    component.addTooltip({ elementId: 'ember-view-02',  title: 'This is another Test'});
  });

  assert.equal(component.get('tooltips.length'), 2);
});
