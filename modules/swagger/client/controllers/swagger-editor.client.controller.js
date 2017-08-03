'use strict';

// Projects controller
angular.module('swagger').controller('SwaggerEditorController', ['$scope', '$stateParams', '$location', 'Authentication', 
  function ($scope, $stateParams, $location, Authentication) {
    $scope.authentication = Authentication;

  // Build a system
    const editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerEditorStandalonePreset
      ]
    })

    window.editor = editor   
  }
]);


