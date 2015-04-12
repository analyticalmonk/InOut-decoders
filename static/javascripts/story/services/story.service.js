(function(){
  'use strict';
  angular
  .module('socauth.story.services')
  .factory('Story',Story);

  Story.$inject = ['$cookies','$http'];

  function Story($cookies,$http){
    var Story = {
      create : create,
      addScene : addScene,
      endStory : endStory,
      shareStory : shareStory
    };

    return Story;


    function create(tripname){
      $http.get('/rest-auth/user/').then(usFn,ueFn);

      function usFn(data,status,headers,config){
        var userid = data.data.id;
        console.log(userid);
        $http.post('/story/trip/',{"user":userid,"name":tripname}).then(tsFn,teFn);
      }
      function ueFn(data,status,headers,config){
        console.log('error occurred');
      }

      function tsFn(data,status,headers,config){
        console.log('trip started');
        return true;

      }
      function teFn(data,status,headers,config){
        console.log('error starting trip');
        return false;
      }
      console.log(tripname);

    }
    function addScene(){
      return 0;
    }
    function endStory(){
      return 0;
    }
    function shareStory(){
      return 0;
    }

  }

})();
