(function(){
  'use strict';

  angular
  .module('socauth.auth.controllers')
  .controller('VerifyController',VerifyController);

  VerifyController.$inject = ['$location','$scope','Authentication'];

  function VerifyController($location,$scope,Authentication){
    var vm = this;
    verifyemail();

    function verifyemail(){
      Authentication.verifyemail();
    }
  }


})();
