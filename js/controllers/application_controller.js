/*global define */
define([
  'underscore',
  'regions/application_region',
  'layouts/application_layout',
  'views/navigation/navigation_view',
  'controllers/validation_type_one_controller'
], function (_, ApplicationRegion, ApplicationLayout, NavigationView, ValidationTypeOneConroller) {
  'use strict';

  var applicationController = Marionette.Controller.extend({

    initialize: function(options){
      this._initializeLayout();
      this._initializeNavigationView();
    },

    homeRoute: function() {
      this.layout.content.empty();
      this.navigationView.showActiveView('home');
    },

    validation1: function() {
      this.navigationView.showActiveView('validation1');
      this._initializeValidationOneView();
    },

    validation2: function() {
      this.layout.content.empty();
      this.navigationView.showActiveView('validation2');
    },

    validation3: function() {
      this.layout.content.empty();
      this.navigationView.showActiveView('validation3');
    },

    validation4: function() {
      this.layout.content.empty();
      this.navigationView.showActiveView('validation4');
    },

    _initializeLayout: function() {
      this.applicationRegion = new ApplicationRegion();
      this.layout = new ApplicationLayout();
      this.applicationRegion.show(this.layout);
    },

    _initializeNavigationView: function() {
      this.navigationView = new NavigationView();
      this.layout.navigationView.show(this.navigationView);
    },

    _initializeValidationOneView: function() {
      this.validationTypeOneConroller = new ValidationTypeOneConroller({mainRegion: this.layout.content});
    }
  });

  return applicationController;

});
