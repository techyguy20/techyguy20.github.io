/*global define */
define([
  'underscore',
  'views/forms/basic_form_view'
], function (_, BasicFormView) {
  'use strict';

  var validationTypeOneController = Marionette.Controller.extend({

    initialize: function(options){
      this.mainRegion = options.mainRegion;
      this._initializeFormView();
    },

    _initializeFormView: function() {
      this.formView = new BasicFormView();
      this.mainRegion.show(this.formView);
    }


  });

  return validationTypeOneController;

});
