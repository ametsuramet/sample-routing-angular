var globalCtrl = angular.module('globalCtrl', []);
globalCtrl.run(function($rootScope, $location , localStorageService) {
    $rootScope.title = "Belajar AngularJs";
    $rootScope.token = null;
    $rootScope.url = 'http://localhost:8000';
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    $rootScope.isLogged = localStorageService.get('token');
      if (!localStorageService.get('token')) {
          $location.path("/login");
      }

    });
  });

globalCtrl.controller('dashboardCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
    //   $scope.phones = data;
    // });

    $scope.test = 'ini dashboard';
  }]);

globalCtrl.controller('logoutCtrl', ['$scope', '$http', '$location','$rootScope','localStorageService',
  function ($scope, $http, $location, $rootScope,localStorageService) {
          alert('asdasd')
          localStorageService.remove('token');
          $location.path("/login");

  }]);

globalCtrl.controller('loginCtrl', ['$scope', '$http',  '$location','$rootScope','localStorageService', '$window',
  function ($scope, $http, $location, $rootScope,localStorageService,$window) {
    $scope.error = ""
    if (localStorageService.get('token')) {
          $location.path("/");
      }
    $scope.login = function() {
      var data = {
              email: $scope.email,
              password: $scope.password
          }
      $.post($rootScope.url+'/login',data,function(data){
            if(data.status=='succeed'){
              localStorageService.set('token', data.token);
              $window.location.href = "/"
            }else{
              $scope.error = "ANJINGGGG"
            }
          })

     

    }

    $scope.test = 'ini Login';
    $scope.title = 'ini Login';
  }]);


globalCtrl.controller('postCtrl', ['$scope', '$http','$rootScope',

  function ($scope, $http ,$rootScope) {
    
    $scope.test = 'ini post';

    $http.get($rootScope.url+'/post').success(function(data) {
        $scope.post_list = data;
      });

    $scope.load_post  = function(item){
      $scope.detail_post = item
    }

  }]);