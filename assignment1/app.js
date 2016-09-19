(function () {
'use strict';
angular.module('lunchApp', [])
.controller('lunchController', lunchController);

lunchController.$inject = ['$scope'];
function lunchController($scope) {
 $scope.lunchitem ="";
  $scope.error = false;
  $scope.enjoy = false;
  $scope.tooMuch = false;
  $scope.checkQuantity = function(){
	$scope.error = false;
  $scope.resetMsgArr();
    var i = 0;
	   if($scope.lunchitem !=""){
  		var items = $scope.lunchitem.split(",");
      console.log("items:",items.length);
  		if(items.length <= 0){
  			$scope.error = true;
  		}else if(items.length<=3){
        $scope.enjoy = true;
  		}else{
        $scope.tooMuch = true;
  		}
  	}else{
  		$scope.error = true;
  	}
  }
  $scope.resetMsgArr = function (){
    $scope.error = false;
    $scope.enjoy = false;
    $scope.tooMuch = false;
  }

}


})();
