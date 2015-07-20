/*global define */
define([
  'underscore',
  'regions/application_region',
  'layouts/application_layout',
  'views/navigation/navigation_view'
], function (_, ApplicationRegion, ApplicationLayout, NavigationView) {
  'use strict';

  var applicationController = Marionette.Controller.extend({

    initialize: function(options){
      this._initializeLayout();
      this._initializeNavigationView();
    },

    homeRoute: function() {
      console.log('home');
      this.navigationView.showActiveView('home');
    },

    validation1: function() {
      console.log('validation1')
      this.navigationView.showActiveView('validation1');
    },

    validation2: function() {
      console.log('validation1')
      this.navigationView.showActiveView('validation2');
    },

    validation3: function() {
      console.log('validation1')
      this.navigationView.showActiveView('validation3');
    },

    validation4: function() {
      console.log('validation1')
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
  });

  return applicationController;

});
