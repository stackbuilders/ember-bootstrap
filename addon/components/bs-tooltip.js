import Ember from 'ember';
import layout from '../templates/components/bs-tooltip';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['tooltip'],
  classNameBindings: ['fade', 'in'],
  animation: true,
  fade: Ember.computed.oneWay('animation'),
  in: Ember.computed.oneWay('isVisible')
});
