/*global define */
define([
  'marionette',
  'jquery',
  'underscore',
  'text!templates/application/applicationLayoutTemplate.html',
], function (Marionette, $, _, ApplicationLayoutTemplate) {
  'use strict';

  var applicationLayout = Backbone.Marionette.LayoutView.extend({
    template: _.template(ApplicationLayoutTemplate),
    className: 'container-fluid',

    regions: {
      navigationView: '#navigationView',
      content   : "#content",
    },

  });

  return applicationLayout;

});