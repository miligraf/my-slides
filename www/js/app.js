(function() {

var app = angular.module('app', ['ionic']);

app.controller('SlideCtrl', function($scope) {

  $scope.slides = [];
  for (var i = 1; i <= 5; i++) {
    $scope.slides.push({
      title: 'Slides #' + i,
      description: 'This is the slide number ' + i
    });
  }

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

})();