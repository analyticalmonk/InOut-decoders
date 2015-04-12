(function(){
  'use strict';

  angular
    .module('socauth.auth.services')
    .config(function(FacebookProvider) {
      FacebookProvider.init('519767678169964');})
    .factory('Authentication',Authentication);

  Authentication.$inject = ['$cookies','$http','Facebook'];

  function Authentication($cookies,$http,Facebook){
    var Authentication = {
      login : login,
      register : register,
      verifyemail : verifyemail,
      fblogin : fblogin,
      //getAuthenticatedAccount : getAuthenticatedAccount,
      isAuthenticated : isAuthenticated,
      //setAuthenticatedAccount : setAuthenticatedAccount,
      unauthenticate : unauthenticate,
      logout : logout
    };
    return Authentication;
    function register(username,password1,password2,email){
      $http.post('/rest-auth/registration/',{
        "username" : username,
        "password1" : password1,
        "password2" : password2,
        "email" : email
      }).then(registerSuccessFn,registerErrorFn);

      function registerSuccessFn(data,status,headers,config){
        console.log(data);
      }
      function registerErrorFn(data,status,headers,config){
        console.log(data);
      }
    }

    function verifyemail(){
      var key = $cookies.email;
      console.log(key);
      $http.post('/rest-auth/registration/verify-email/',{ "key" : key}).then(verifySuccessFn,verifyErrorFn);
      function verifySuccessFn(data,status,headers,config){
        console.log(data);
      }
      function verifyErrorFn(data,status,headers,config){
        console.log(data);
      }

    }

    function login(username,password){
      $http.post('/rest-auth/login/',{"username" : username,"password":password}).then(loginSuccessFn,loginErrorFn);

      function loginSuccessFn(data,status,headers,config){
        console.log(data.data.key);
        console.log("success");
        window.location = '/';
      }
      function loginErrorFn(data,status,headers,config){console.log(data);}
    }

    function logout(){
      $http.post('/rest-auth/logout/').then(logoutSuccessFn,logoutErrorFn);
      function logoutSuccessFn(data,status,headers,config){
        Authentication.unauthenticate();
        window.location = '/';
      }
      function logoutErrorFn(data,status,headers,config){
        console.log(data);
      }
    }

    function fblogin(){
      Facebook.getLoginStatus(function(response){
        console.log(response);
        if (response.status==="connected")
            {$http.post('/rest-auth/facebook/',{"access_token": response.authResponse.accessToken}).then(sFn,eFn);

      }
      else{
        Facebook.login(function(response){
          console.log(response);
          if (response.status==="connected")
            {$http.post('/rest-auth/facebook/',{"access_token": response.authResponse.accessToken}).then(sFn,eFn);}
        });
      }
      });
      function sFn(data,status,headers,config){
        console.log('success');
        console.log(data.data.key);
        $http.defaults.headers.common.Authorization = 'Token ' + data.data.key;
        $cookies.token = data.data.key;
        window.location = '/storyhome';
      }
      function eFn(data,status,headers,config){
        console.log(data);
      }

    }

    function isAuthenticated(){
      return !!$cookies.token;

    }
    function unauthenticate(){
      delete $cookies.token;
    }
  }

})();
