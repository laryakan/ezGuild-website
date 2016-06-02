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
      controller: "membersCtrl"
    })
    .otherwise({
      redirectTo: "/sign"
    })
});

// SERVICES
//Dependencies injectors
ezGuildApp.factory("userService", function() {
  var o = {};
  var user = {
    nickname: '',
    email: ''
  };
  o.getUser = function() {
    return user;
  }

  return o;
});

//Members
ezGuildApp.factory("membersService", [function() {
  var o = {};
  o.getAll = function($http, cb) {
    return $http.get('/api/members').success(function(data) {
      cb(data);
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
ezGuildApp.controller('membersCtrl', function firstConfirmCtrl($scope, $http, membersService) {
  membersService.getAll($http, function(members) {
    $scope.members = members;
    console.log(JSON.stringify($scope.members));
  });
});