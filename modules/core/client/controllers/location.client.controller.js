'use strict';

angular.module('core').controller('LocationController', ['$scope', '$state', 'Authentication', 'Menus','$uibModal','geolocation','$rootScope','$cookieStore',
  function ($scope, $state, Authentication, Menus,$uibModal,geolocation,$rootScope,$cookieStore) {

  	$scope.locations =[{'id':'001','name':'Bangalore'},
  						{'id':'002','name':'Chennai'},
  						{'id':'003','name':'Mumbai'},
  						{'id':'004','name':'Delhi'},
  						{'id':'005','name':'Hyderabad'},
  						{'id':'006','name':'Noida'}];


  	$scope.chooseThisLoc = function (loc) {
  		$rootScope.selected_loc = loc.name;
  		$scope.$close();
  		$cookieStore.put('userloc',loc.name);
  	};



}

]);