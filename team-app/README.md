# Team-app
Built my First AngularJS app based on Teams.

## STEP-BY-STEP Guide of building a Team-app.

#### STEP 01

// teamApp.html
```html
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Angular Team App</title>
    <link href="css/normalize.css" rel="stylesheet" media="screen" />
    <link href="css/main.css" rel="stylesheet" media="screen" />

    <script src="scripts/angular.min.js"></script>
    <script src="scripts/teamAppModule.js"></script>

</head>
<body data-ng-app="myTeamApp">
    <section data-ng-controller="teamCtrl">

    </section>
</body>
</html>
```

// teamAppModule.JS
```js
var teamApp = angular.module('myTeamApp', [])
.controller('teamCtrl', ['$scope', function ($scope) {

}]);
```

#### STEP 02

// teamApp.html
```html
<body data-ng-app="myTeamApp">
    <section data-ng-controller="teamCtrl">
        <h1 data-ng-bind="pageTitle"></h1>
    </section>
</body>
```

// teamAppModule.js
```js
.controller('teamCtrl', ['$scope', function ($scope) {
    $scope.pageTitle = "Team Generator";
}]);
```

#### STEP 03
```js
$scope.people = [];
$scope.add = function(name){
	$scope.people.push(name);
    	$scope.newName = "";
    	console.log($scope);
};
$scope.remove = function(index){
    	$scope.people.splice(index, 1);
};
```

#### STEP 04
```html
<ul>
        <li data-ng-repeat="person in people">
        	<h2>{{person}}</h2>
        	<button data-ng-click="remove($index)">delete</button>
        </li>
</ul>
```

#### STEP 05
```js
$scope.shuffle = function(array){
	for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
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
	$scope.teams = [];
	var shuffled = $scope.shuffle(angular.copy($scope.people));
	$scope.teams = $scope.chunk(shuffled, number);
	console.log($scope.teams);
};
```

#### STEP 06
```html
<div class="teams">
    <form>
    	<label>No of teams:</label>
    	<input type="number" data-ng-model="teamNumber" />
    	<button data-ng-click="generateTeams(teamNumber)">Create teams</button>
    </form>
</div>
```

#### STEP 07
```html
<div data-ng-repeat="team in teams">
    <h3>Team {{$index + 1}}</h3>
    <ul>
<li data-ng-repeat="person in team">{{person}}</li>
    </ul>
</div>
```

#### STEP 08
```js
$scope.generateTeams = function(number){
	$scope.resetTeams();
	var shuffled = $scope.shuffle(angular.copy($scope.people));
	$scope.teams = $scope.chunk(shuffled, number);
	console.log($scope.teams);
};
$scope.resetTeams = function(){
	$scope.teams = [];
};
```

#### STEP 09
```html
<button data-ng-show="teams.length > 0" data-ng-click="resetTeams()">Reset teams</button>
```
