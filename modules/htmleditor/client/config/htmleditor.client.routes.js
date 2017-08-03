'use strict';

// Configure the 'chat' module routes
angular.module('htmleditor').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('htmleditor', {
        abstract: true,
        url: '/htmleditor',
        templateUrl: 'modules/htmleditor/views/htmleditor.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
