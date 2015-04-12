(function(){
  'use strict';

  angular
    .module('socauth.auth',['socauth.auth.controllers','socauth.auth.services']);

  angular
    .module('socauth.auth.controllers',[]);

  angular
    .module('socauth.auth.services',['ngCookies','facebook']);

})();
