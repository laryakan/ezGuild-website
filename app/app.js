var ezGuildApp = angular.module('ezGuildApp', []);

ezGuildApp.controller('ezGuildCtrl', function ezGuildCtrl($scope) {
  $scope.user = {
    nickname: '',
    email: ''
  };
  $scope.change = function () {
    console.log($scope.user.email);
  }
});