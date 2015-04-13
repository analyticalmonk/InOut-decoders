(function(){
  'use strict';
  angular
  .module('socauth.layout.controllers')
  .controller('StoryController',StoryController);

  StoryController.$inject = ['$location','$scope','Authentication','ngDialog','Story'];

  function StoryController($location,$scope,Authentication,ngDialog,Story){

    var vm = this;
    vm.start = start;
    vm.redir = redir;
    //activate();
    function activate(){
      if(Authentication.isAuthenticated()){
        $location.url('/');
      }
    }
    function start(){
      ngDialog.open({ template: '/static/views/tripname.html',
                  controller:'DialogController',
                  scope :$scope
      });
    }

    function redir(){
      window.location = '/static/src/index.html';
    }



  }
})();
