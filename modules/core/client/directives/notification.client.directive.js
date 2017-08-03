(function () {
  'use strict';

  angular
    .module('core')
    .directive('notification', notification);

  notification.$inject = [/*Example: '$state', '$window' */];

  function notification(/*Example: $state, $window */) {
    return {
      template: '<div class="notify sample-show-hide"><span class="notify-header">{{message.hdr}}</span>'+  
            '<span class="notify-content">{{message.content}}</span>'+
            '<button type="button" class="close" aria-label="Close" onclick="close()"><span aria-hidden="true">&times;</span></button></div>'
              ,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Notification directive logic
        // ...

        element.text('this is the notification directive');
      }
    };
  }
})();
