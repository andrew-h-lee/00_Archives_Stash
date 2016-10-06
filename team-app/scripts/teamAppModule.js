var teamApp = angular.module('myTeamApp', [])
  .controller('teamCtrl', ['$scope', function($scope) {
    $scope.pageTitle = "Team Generator";

    $scope.people = [];
    $scope.add = function(name) {
      $scope.people.push(name);
      $scope.newName = "";
      console.log($scope);
    };
    $scope.remove = function(index) {
      $scope.people.splice(index, 1);
    };

    $scope.shuffle = function(array) {
      for (var j, x, i = array.length; i; j = parseInt(Math.random() * i),
      x = array[--i], array[i] = array[j], array[j] = x);
        return array;
    };
    $scope.chunk = function(array, num) {
      var len = array.length;
      var out = [];
      var i = 0;
      while (i < len) {
        var size = Math.ceil((len - i) / num--);
        out.push(array.slice(i, i += size));
      }
      return out;
    };
    $scope.generateTeams = function(number){
      $scope.teams =[];
      var shuffled = $scope.shuffle(angular.copy($scope.people));
      $scope.teams = $scope.chunk(shuffled, number);
      console.log($scope.teams);
    };

    $scope.generateTeams = function(number){
      $scope.resetTeams();
      var shuffled = $scope.shuffle(angular.copy($scope.people));
      $scope.teams = $scope.chunk(shuffled, number);
      console.log($scope.teams);
    };
    $scope.resetTeams = function(){
      $scope.teams = [];
    };

  }]);
