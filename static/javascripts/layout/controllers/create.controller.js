(function(){
  'use strict';
  angular
  .module('socauth.layout.controllers')
  .controller('CreateController',CreateController);

  CreateController.$inject = ['$location','$scope','Authentication','ngDialog','Story','fileUpload'];

  function CreateController($location,$scope,Authentication,ngDialog,Story,fileUpload){

    var vm = this;
    vm.uploadFile = uploadFile;

    //activate();
    function activate(){
      if(Authentication.isAuthenticated()){
        $location.url('/');
      }
    }


    function uploadFile (){
      var file = $scope.myFile;
      console.log('file is ' + JSON.stringify(file));
      var uploadUrl = "/fileUpload";
      fileUpload.uploadFileToUrl(file, uploadUrl);
    };



  }




})();
