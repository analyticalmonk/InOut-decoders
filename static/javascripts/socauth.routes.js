(function(){
  'use strict';

  angular
    .module('socauth.routes')
    .config(config)

  config.$inject = ['$routeProvider']

  function config($routeProvider){
    $routeProvider.when('/register',{
      controller : 'RegisterController',
      controllerAs : 'vm',
      templateUrl : '/static/views/register.html'
    }).when('/verifyemail',{
      controller : 'VerifyController',
      controllerAs : "vm",
      templateUrl: '/static/views/verifyemail.html'
    }).when('/login',{
      controller : 'LoginController',
      controllerAs : 'vm',
      templateUrl : '/static/views/login.html'
    }).when('/storyhome',{
      controller : 'StoryController',
      controllerAs : 'vm',
      templateUrl : '/static/views/story.html'
    }).otherwise('/');
  }
})();
