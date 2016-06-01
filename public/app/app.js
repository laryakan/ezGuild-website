var ezGuildApp = angular.module('ezGuildApp', ["ngRoute"]);

// ROUTER
ezGuildApp.config(function($routeProvider) {
  $routeProvider
    .when("/sign", {
      templateUrl: "partials/signinform.html",
      controller: "firstFormCtrl"
    })
    .when("/confirm", {
      templateUrl: "partials/confirmation.html",
      controller: "firstConfirmCtrl"
    }).when("/members", {
      templateUrl: "partials/members.html",
      controller: "membersCtrl",
      resolve: {
        postPromise: ['members', function(members) {
          return members.getAll();
        }]
      }
    })
    .otherwise({
      redirectTo: "/sign"
    })
});

// SERVICES
//Dependencies injectors
ezGuildApp.factory("userService", function() {
  var user = {
    nickname: '',
    email: ''
  };
  return {
    getUser: function() {
      return user;
    }
  }
});

//Members
ezGuildApp.factory("membersService", [function() {
  o.getAll = function() {
    return $http.get('/members').success(function(data) {
      angular.copy(data, o.members);
    });
  }

  return o;
}]);


// CONTROLLERS
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

//Confirm controller
ezGuildApp.controller('firstConfirmCtrl', function firstConfirmCtrl($scope, userService) {
  $scope.user = userService.getUser();
});

//Members controller
ezGuildApp.controller('membersCtrl', function firstConfirmCtrl($scope, membersService) {
  $scope.members = membersService.getAll();
  console.log($scope.members);
});