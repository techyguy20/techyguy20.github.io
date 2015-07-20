require.config({
  paths: {
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    marionette: 'vendor/backbone.marionette/backbone.marionette',
    jquery: 'vendor/jquery/jquery-2.1.1',
    text: 'vendor/text/text',
    bootstrap: 'vendor/bootstrap/bootstrap.min'
  },
  deps: ['jquery', 'underscore']
});

require([
  'application',
  'backbone',
  'router/router',
  'controllers/application_controller'
], function (Application, Backbone, Router, Controller) {
  'use strict';
  app.start();

  var controller = new Controller();
  window.router = new Router({ controller: controller });
  Backbone.history.start();

});