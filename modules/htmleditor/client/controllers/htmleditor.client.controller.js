'use strict';

// Projects controller
angular.module('swagger').controller('HTMLEditorController', ['$scope', '$stateParams', '$location', 'Authentication', 
  function ($scope, $stateParams, $location, Authentication) {
    $scope.authentication = Authentication;
   
    $scope.projects =[{
    					'name':'Sample Project',
    					'code':'sample-project',
    					'workspace':'/d/worklab/meanjs/temp/user/sample-project',
    					 'version':0.1,
    					 'created-by':'username',
    					 'created-dt':''
    					}];

    $scope.editor ={};
    $scope.editor.color = ['red','pink','purple','deep-purple','indigo','blue','light-blue','cyan','teal','green','light-green','lime','yello','amber','orange','deep-orange','brown','grey','blue-grey','black','white'];
	$scope.editor.shades = [{'name':'light','varities':['lighten-1','lighten-2','lighten-3','lighten-4','lighten-5']},
							{'name':'dark','varities':['darken-1','darken-2','darken-3','darken-4']},
							{'name':'accent','varities':['accent-1','accent-2','accent-3','accent-4']}];


	$scope.editor.icons =[{'type':'Action','icns':[

						 ]},{'type':'Alert','icns':[

						 ]},{'type':'AV','icns':[

						 ]},{'type':'Communication','icns':[

						 ]},{'type':'Content','icns':[

						 ]},{'type':'Device','icns':[

						 ]},{'type':'Editor','icns':[

						 ]},{'type':'File','icns':[

						 ]},{'type':'Hardware','icns':[

						 ]},{'type':'Image','icns':[

						 ]},{'type':'Maps','icns':[

						 ]},{'type':'Navigation','icns':[

						 ]},{'type':'Notification','icns':[

						 ]},{'type':'Places','icns':[

						 ]},{'type':'Social','icns':[

						 ]},{'type':'Toggle','icns':[

						 ]}

						 ];							    



  }
]);
