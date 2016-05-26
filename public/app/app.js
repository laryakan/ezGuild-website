var ezGuildApp = angular.module('ezGuildApp', ["ngRoute"]);

// Router
ezGuildApp.config(function($routeProvider) {
  $routeProvider
    .when("/sign", {
      templateUrl: "partials/signinform.html",
      controller: "firstFormCtrl"
    })
    .when("/confirm", {
      templateUrl: "partials/confirmation.html",
      controller: "firstConfirmCtrl"
    })
    .otherwise({
      redirectTo: "/sign"
    })
});


//Dependencies injectors
ezGuildApp.factory("userService", function(){
  var user = {
    nickname: '',
    email: ''
  };
  return {
    getUser: function(){
      return user;
    }
  }
});

//Form controller
ezGuildApp.controller('firstFormCtrl', function firstFormCtrl($scope, userService, $location) {
  $scope.user = userService.getUser();
  $scope.community = {
    name: 'my guild'
  };
  $scope.signin = function() {
    $location.path('/confirm');
  }
});

//Confirme controller
ezGuildApp.controller('firstConfirmCtrl', function firstConfirmCtrl($scope, userService) {
  $scope.user = userService.getUser();
});