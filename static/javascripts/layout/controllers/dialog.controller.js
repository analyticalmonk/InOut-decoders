(function(){
  'use strict';
  angular
  .module('socauth.layout.controllers')
  .controller('DialogController',DialogController);

  DialogController.$inject = ['$location','$scope','Story'];

  function DialogController($location,$scope,Story){


    $scope.storyname = "";
    $scope.tripstart = function (){
      created=Story.create($scope.storyname);
      if (created){
          $location.url('/storycreate');
      }
    };

    //activate();
    function activate(){
      if(Authentication.isAuthenticated()){
        $location.url('/');
      }
    }




}
})();
