angular.module('app', [
  'app.services'
  ])

.controller('notePadController', function ($scope, saver) {
  // $scope.page = {};
  // page = $scope.page;
  // saver.loadPages().then( function(response) {
  //   page.links = response.data;
  // })
  // $scope.saveHeader = function(header) {
  //   page.header = header;
  // };
  // $scope.saveBody = function(body) {
  //   page.body = body;
  // };
  // $scope.saveColor = function(color) {
  //   page.color = color;
  //   document.body.style.background = color;
  // };
  // $scope.savePage = function() {
  //   saver.savePage(page);
  // };
  // $scope.loadPage = function(link) {
  //   page.header = link.header;
  //   page.body = link.body;
  //   page.color = link.color;
  //   document.body.style.background = link.color;
  // };
  // $scope.save = function() {
  //   var doc = new jsPDF();
  //   doc.fromHTML(document.body.getElementsByClassName('text')[0].text + 
  //     "\n" + document.body.getElementsByClassName('text')[1].text, 15, 15);
  //   doc.save('page.pdf')
  // }
});