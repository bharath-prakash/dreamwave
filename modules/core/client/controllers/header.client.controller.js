'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', '$location', 'Authentication', 'Menus','$rootScope','$cookies','$cookieStore','Notify','Topnav',
  function ($scope, $state,$location, Authentication, Menus,$rootScope,$cookies,$cookieStore,Notify,Topnav) {
    // Expose view variables
   
 $scope.$state = $state;
    $scope.authentication = Authentication;
    
    //console.log(Topnav.currapp);

    $scope.navservices = [
    					 {
    					 	'name':'Projects',
    					 	'icon':'work',
    					 	'lnk':'projects.main'
    					 },{
    					 	'name':'Designer',
    					 	'icon':'collections_bookmark',
    					 	'lnk':'authentication.signup'
    					 },
    					 {
    					 	'name':'Services',
    					 	'icon':'view_comfy',
    					 	'lnk':'authentication.signup'
    					 },{
    					 	'name':'Storage',
    					 	'icon':'storage',
    					 	'lnk':'authentication.signup'
    					 },{
                            'name':'APIs',
                            'icon':'grain',
                            'lnk':'swagger.ui'
                         }
    ];

    $scope.tools = [
    					 {
    					 	'name':'Style',
    					 	'icon':'style',
    					 	'lnk':'authentication.signup'
    					 },{
    					 	'name':'HTMLEditor',
    					 	'icon':'edit',
    					 	'lnk':'authentication.signup'
    					 },
    					 {
    					 	'name':'JSONConst',
    					 	'icon':'blur_circle',
    					 	'lnk':'authentication.signup'
    					 }
    ];  

     $scope.adminsrv = [
                         {
                            'name':'Users',
                            'icon':'supervisor_account',
                            'lnk':'admin.users'
                         }
    ];  

    $scope.goto = function(lnk,name){
    	$state.go(lnk);
        Topnav.updateContext(name);
        $scope.currapp = name;
        $('.nav_lnk').sideNav('hide');
    };
    
    $scope.new_notification = "btn btn-floating pulse";

  }
]);
