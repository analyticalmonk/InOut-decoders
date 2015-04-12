(function(){
  'use strict';

  angular
  .module('socauth',['socauth.config','socauth.routes','socauth.auth','socauth.layout','socauth.story']);

  angular
  .module('socauth.routes', ['ngRoute']);

  angular
  .module('socauth.config',[]);

  angular
  .module('socauth')
  .run(run);

  run.$inject = ['$http']

  function run($http){
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }

})();
