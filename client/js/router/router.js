/*global define */
define([
  'marionette',
  'controllers/application_controller'
], function (Marionette, Controller) {
  'use strict';

  return Marionette.AppRouter.extend({

    appRoutes: {
      '': 'homeRoute',
      'home' : 'homeRoute',
      'validation1': 'validation1',
      'validation2': 'validation2',
      'validation3': 'validation3',
      'validation4': 'validation4',
    }
  });
});
