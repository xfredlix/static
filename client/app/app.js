angular.module('app', [
  'app.service'
  ])

.controller('notePadController', function ($scope, notePad) {
  //controllers take in parameters, just as our model
  //the scope is whatever the index.html page has access to
  //teh index page knows to use this controller because we put ng-controller = to this one
  $scope.notes = [];
  //we can invoke any property from scope in the index.html function. thats where
  //i used this save notes function
  // see below for more examples
  $scope.saveNotes = notes => {
    $scope.notes.push(notes);
    console.log(notes)
  } 
});



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