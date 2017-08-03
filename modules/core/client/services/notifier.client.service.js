'use strict';

//Notify service used for managing  notifications
angular.module('core').service('Notify', ['$cookieStore',
  function ($cookieStore) {

  	this.notifed = false;


	this.notify = function (hdr,message){
		this.notified = true;
		var body = angular.element(document.getElementsByTagName("body"));
		
		//body.prepend(htmlStr);


	};

	this.close = function (){
		this.notified = false;
	} 	

  }
  ]);