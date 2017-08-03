(function() {
  'use strict';

  angular
    .module('core')
    .controller('LoginCntrlController', LoginCntrlController);

  LoginCntrlController.$inject = ['$scope'];

  function LoginCntrlController($scope) {
    var vm = this;

    // Login cntrl controller logic
    // ...

    $scope.hdtxt = 'Sign In';
    $scope.signin = true;
    $scope.singup = false;

    $scope.show = function (usage) {
      if(usage == 'signin'){
        $scope.signin = true;
        $scope.signup = false;
        $scope.hdtxt = 'Sign In';
      }else if(usage == 'signup'){
        $scope.signin = false;
        $scope.signup = true;
        $scope.hdtxt = 'Sign Up';
      }
    };


    init();

    function init() {
    }
  }
})();
