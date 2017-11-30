'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  // 'ngRoute',
    'ui.router',
  'myApp.view1',
  'myApp.view1.editUser',
  'myApp.view2',
  'myApp.view3',
  'myApp.viewEdit',
  'myApp.version',
  'myApp.userService',
]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view3'});
// }]);

config([ function($locationProvider) {

}]);
