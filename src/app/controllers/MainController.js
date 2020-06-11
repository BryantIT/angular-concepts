function MainController($scope) {
  $scope.name = 'Bryant Richards';
}

angular
  .module('app')
  .controller('MainController', MainController);
