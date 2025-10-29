(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Controller for items to buy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

// Controller for already bought items
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

// Service handling shared data between controllers
function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "apples", quantity: 5 },
    { name: "milk bottles", quantity: 2 },
    { name: "chips", quantity: 3 },
    { name: "chocolates", quantity: 7 }
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1)[0];
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
