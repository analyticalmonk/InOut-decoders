(function(){
  'use strict';

  angular
  .module('socauth.auth.controllers')
  .controller('LoginController',LoginController);

  LoginController.$inject = ['$location','$scope','Authentication'];

  function LoginController($location,$scope,Authentication){
    var vm = this;
    vm.login = login;

    function login(){
      Authentication.login(vm.username,vm.password);
    }
  }


})();
