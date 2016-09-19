(function () {
'use strict';

angular.module('lunchApp', [])

.controller('lunchController', function ($scope) {
  $scope.lunchitem = [];
  $scope.error = false;
  $scope.checkQuantity = function(){
    var i = 0;
    var items = $scope.lunchitem.split(",");
    if(items <= 0){
        $scope.error = true;
    }else if(items<=3){

    }else{

    }
});

})();