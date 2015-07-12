import { bsBindTooltip } from '../../../helpers/bs-bind-tooltip';
import { module, test } from 'qunit';

module('Unit | Helper | bs bind tooltip', {
  unit: true,
  needs: ["service:tooltips-service"]
});

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(1);
  assert.ok(bsBindTooltip('foobar'));
});
