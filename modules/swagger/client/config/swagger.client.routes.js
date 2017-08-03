'use strict';

// Configure the 'chat' module routes
angular.module('swagger').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('swagger', {
        abstract: true,
        url: '/swagger',
        templateUrl: 'modules/swagger/views/swagger.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      }).state('swagger.ui', {
        url:'/ui',
        templateUrl: 'modules/swagger/views/swagger-ui.client.view.html'
      }).state('swagger.editor', {
        url:'/editor',
        templateUrl: 'modules/swagger/views/swagger-editor.client.view.html'
      }).state('swagger.analytics', {
        url:'/analytics',
        templateUrl: 'modules/swagger/views/swagger-analytics.client.view.html'
      });
  }
]);
