app.controller('UserCtrl', ['$scope', '$resource', function($scope, $resource) {

  var User = $resource('/api/users');

  $scope.users = [];

  User.query(function(results) {
    $scope.users = results;
  });

  $scope.createUser = function() {
    var user = new User();
    user.name = $scope.userName;
    user.$save(function (result) {
      $scope.users.push(result);
      $scope.userName = "";
    });
  }

}]);
