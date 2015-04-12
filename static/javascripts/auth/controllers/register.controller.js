(function(){
  'use strict';

  angular
    .module('socauth.auth.controllers')
    .controller('RegisterController',RegisterController);

  RegisterController.$inject = ['$location','$scope','Authentication'];

  function RegisterController($location,$scope,Authentication){
    var vm = this;
    vm.register = register;
    

    function register(){
      Authentication.register(vm.username,vm.password1,vm.password2,vm.email);
    }
  }


})();
