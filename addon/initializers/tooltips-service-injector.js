import TooltipsService from '../models/tooltips-service';

export function initialize( container, application) {
  let service = TooltipsService.create();
  application.register('service:tooltips', service, { instatiate: false});
  application.inject('helper:bs-bind-tooltip', 'tooltipsService', 'service:tooltips');
  application.inject('component:bs-tooltips-container', 'tooltipsService', 'service:tooltips');
}

export default {
  name: 'tooltips-service-injector',
  initialize: initialize
};
