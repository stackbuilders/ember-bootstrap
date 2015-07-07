import Ember from 'ember';
import layout from '../templates/components/bs-tooltip-container';
let computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  tooltipsHash: {},
  tooltips: computed('tooltipsHash', function() {
    let tooltipsHash = this.get('tooltipsHash');
    return Ember.A(Ember.keys(tooltipsHash).map((key) => { return tooltipsHash[key]; }));
  }),

  addTooltip: function(data) {
    let container = {};
    container[data.elementId] = data;
    this.set('tooltipsHash', Ember.merge(this.get('tooltipsHash'), container));
  },

  removeTooltip: function(elementId) {
    delete this.get('tooltipsHash')[elementId];
  }
});
