'use strict';

// Configure the 'chat' module routes
angular.module('projects').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('projects', {
        abstract: true,
        url: '/projects',
        template: '<ui-view/>',
        data: {
          roles: ['user', 'admin']
        }
      }).state('projects.main', {
        url:'',
        templateUrl: 'modules/projects/views/projects.client.view.html'
      });
  }
]);
