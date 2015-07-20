/*global define */
define([
  'marionette',
  'jquery',
  'underscore',
  'text!templates/navigation/navigationViewTemplate.html'
], function (Marionette, $, _, NavigationViewTemplate) {
  'use strict';

  var navigationView = Marionette.ItemView.extend({
    template: _.template(NavigationViewTemplate),
    className: 'nav nav-pills nav-stacked',
    tagName: 'ul',

    ui:{
      homeView       : '#homeView',
      validation1View: '#validation1View',
      validation2View: '#validation2View',
      validation3View: '#validation3View',
      validation4View: '#validation4View'
    },

    events:{
      'click #homeView'       : '_onNavigationClick',
      'click #validation1View': '_onNavigationClick',
      'click #validation2View': '_onNavigationClick',
      'click #validation3View': '_onNavigationClick',
      'click #validation4View': '_onNavigationClick',
    },

    showActiveView: function(view) {
      this.$el.find('li').removeClass('active');
      $('#' + view+'View').addClass('active');
    },

    _onNavigationClick: function(event) {
      // console.log($(event.currentTarget).attr('id').replace('View', ''));
      // this.showActiveView($(event.currentTarget).attr('id').replace('View', ''));
      router.navigate($(event.currentTarget).attr('id').replace('View', ''), {trigger:true});
    }

  });

  return navigationView;
});