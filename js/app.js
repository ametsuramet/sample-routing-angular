var app = angular.module('app', [
  'ngRoute',
  'globalCtrl',
  'ngSanitize',
  'LocalStorageModule'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl'
      }).
      when('/post', {
        templateUrl: 'views/post.html',
        controller: 'postCtrl'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      }).
      when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'logoutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
});

