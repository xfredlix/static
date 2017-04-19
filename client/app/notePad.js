angular.module('app.service', [])

.factory('notePad', function($http) {
  //factories are the models, it can write functions and 
  //return an object holding the functions
  //see below for an example. Anything we need can be passed into the parameter
  //for us, we put in the http as a parameter, check documentation for more examples
  return {};
});








  // var savePage = function(page) {
  //   return $http({
  //     method: 'POST',
  //     url: '/',
  //     data: page
  //   })
  //   .then( function(response) {
  //     return response;
  //   }).catch( function(error) {
  //     console.log(error);
  //   });
  // };

  // var loadPages = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/pages',
  //   })
  //   .then( function(response) {
  //     return response;
  //   }).catch( function(error) {
  //     console.error(error);
  //   })
  // }
  // return {
  //   savePage: savePage,
  //   loadPages: loadPages
  // }