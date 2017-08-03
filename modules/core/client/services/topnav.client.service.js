'use strict';

//Notify service used for managing  notifications
angular.module('core').service('Topnav', ['$rootScope',
  function ($rootScope) {

  	this.currapp = "Home";


	this.updateContext = function (message){
		this.currapp = message;	

	};

	 	

  }
  ]);