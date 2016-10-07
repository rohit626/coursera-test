(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];

function ToBuyController($scope, ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getItems(1);
  toBuy.bought = function(index){
  ShoppingListCheckOffService.bought(index);
  }
}
function AlreadyBoughtController($scope, ShoppingListCheckOffService){
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getItems(2);
}
function ShoppingListCheckOffService(){
  var service = this;
  // List of shopping items
  var itemToBuy = [
    { name: "Cookies", quantity: 10 },
    { name: "Pizza", quantity: 8 },
    { name: "Burger", quantity: 3 },
    { name: "Jam", quantity: 4 },
    { name: "Bread", quantity: 5 }
  ];
  var itemAlreadyBought = [];
  service.getItems = function (mode) {
    return mode==1?itemToBuy:itemAlreadyBought;
  };
  service.bought = function (itemIdex) {
    itemAlreadyBought.push(itemToBuy[itemIdex]);
    itemToBuy.splice(itemIdex, 1);
  };
}

})();
