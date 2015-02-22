'use strict';

angular.module('core').controller('HomeController', ['$scope', '$location', 'Authentication', 'Events',
	function($scope, $location, Authentication, Events) {
		$scope.authentication = Authentication;

    $scope.getRandomEvent = function() {
      var events = Events.query(function(res) {
        var item = res[Math.floor(Math.random()*res.length)];
        $location.path('events/' + item._id);
      });
    }
	}
]);
