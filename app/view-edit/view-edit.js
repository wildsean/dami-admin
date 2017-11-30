'use strict';

angular.module('myApp.viewEdit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view-edit.viewEdit', {
      // url:'/view-edit.viewEdit',
      templateUrl:'/view-edit/view-edit.html',
      controller:'ViewDditCtrl'
  });
}])

.controller('ViewDditCtrl', [function() {

}]);