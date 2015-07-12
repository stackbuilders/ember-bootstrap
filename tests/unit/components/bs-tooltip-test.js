import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bs-tooltip', 'Unit | Component | bs tooltip', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders with the correct css classes', function(assert) {
  assert.expect(3);

  let component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
  assert.equal(component.$().attr('class'), 'ember-view tooltip fade in');
});

test('calculates the location of its target element', function(assert) {
  assert.expect(1);
  assert.equal(true, true);
});
