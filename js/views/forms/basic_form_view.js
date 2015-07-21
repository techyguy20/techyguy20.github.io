/*global define */
define([
  'marionette',
  'jquery',
  'underscore',
  'text!templates/forms/basicFormViewTemplate.html'
], function (Marionette, $, _, BasicFormViewTemplate) {
  'use strict';

  var basicFormView = Marionette.ItemView.extend({
    template: _.template(BasicFormViewTemplate),

    ui:{
    },

    events:{
    },
  });

  return basicFormView;
});