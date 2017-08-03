'use strict';

angular.module('core').controller('SidenavCtrl', ['$scope', '$state', 'Authentication', 'Menus','$rootScope','$cookies','$cookieStore','Notify',
  function ($scope, $state, Authentication, Menus,$rootScope,$cookies,$cookieStore,Notify) {
    // Expose view variables
   
   $scope.menus = [
   					{'name':'Projects',
   					'icon':'folder'}
   					];

  }
]);
