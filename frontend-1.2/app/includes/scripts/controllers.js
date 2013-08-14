'use strict';

/* Variables:
 * 1) $scope: use this variable to set data in the user interface.
 * 2) plus: use this for all Plus.io provided functionality.
 */
 
$app.controller('HomeCrtl', function ($scope, plus) {
  // defaulting the time on Angular's model variable.
  $scope.time = Date.now();

  setInterval(function(){
  	$scope.$apply(function(){
    	$scope.time = new Date().getTime();
  	});
  }, 1000);
  
});
$app.controller('MagicCrtl', function ($scope, plus) {
	var year=new Date().getFullYear();
	$scope.magicbox={title:"Welcome to MagicBox!",date:year};


	$scope.updateTitle=function(){
		alert("Change your world!");
		$scope.magicbox.title ="This is what you will see ... \n\r ;)";
	};


	$scope.quiz={name:"",age:"5"};
	$scope.askMeBack=function(){
alert($scope.quiz.age + "sdfasf");
		//var str = $scope.quiz.name + ":" + $scope.quiz.age;

		plus.collection.add("quizs",$scope.quiz);
		//.then(function(){
			alert("Wait I am getting your data :P!" /*+ str*/);
		//});
	};
	
  
});