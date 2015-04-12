(function(){
  'use strict';
  angular
  .module('socauth.layout.controllers')
  .controller('NavbarController',NavbarController);

  NavbarController.$inject = ['$scope','Authentication'];

  function NavbarController($scope,Authentication){

    var vm = this;

    vm.logout = logout;

    vm.fblogin = fblogin;

    function logout(){
      Authentication.logout();
    }

    function fblogin(){
      Authentication.fblogin();
    }

  }
})();
