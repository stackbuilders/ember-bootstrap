import Ember from 'ember';
import layout from '../templates/components/bs-tooltip-container';

export default Ember.Component.extend({
  layout: layout,
  tooltips: Ember.A([]),

  addTooltip: function(data) {
    this.get('tooltips').pushObject(data);
  },

  removeTooltip: function(elementId) {
    let tooltips = this.get('tooltips');
    let index = -1;

    for (let i = 0; i < tooltips.length; i++) {
      if (tooltips[i].elementId === elementId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this.get('tooltips').removeAt(index, 1);
    }
  }
});
