// Import angular
import 'angular';

// Material design css
import 'angular-material/angular-material.css';

// Sanitize
import angularSanitize from 'angular-sanitize';

// Material
import angularMaterial from 'angular-material';

// Material Design Icons
import angularMaterialIcons from 'angular-material-icons';

// Moment
import moment from 'moment';

// Animation
import angularAnimate from 'angular-animate';

// Router
import angularUIRouter from 'angular-ui-router';

// Our modules
import home from './home/home.module';

import AppController from './app.controller';

// Project specific style
import './scss/main.scss';

// Create our app module
export const app = angular.module('app', [
  angularSanitize,
  angularMaterial,
  angularMaterialIcons,
  angularAnimate,
  angularUIRouter,
  home
]);

app.controller('AppController', AppController);

app.config(($locationProvider, $stateProvider) => {

  // HTML5 push-state
  $locationProvider.html5Mode(true);

});


app.controller('AppController', function($scope, $timeout) {
  $scope.counter = 0;
  $scope.stopped = false;
  $scope.buttonText = 'Stop';
  $scope.onTimeout = function() {
    $scope.counter++;
    mytimeout = $timeout($scope.onTimeout, 1000);
  }
  var mytimeout = $timeout($scope.onTimeout, 1000);
  $scope.takeAction = function() {
    if (!$scope.stopped) {
      $timeout.cancel(mytimeout);
      $scope.buttonText = 'Resume';
    } else {
      mytimeout = $timeout($scope.onTimeout, 1000);
      $scope.buttonText = 'Stop';
    }
    $scope.stopped = !$scope.stopped;
  }
});


app.filter('formatTimer', function() {
  return function(input) {
    function z(n) {
      return (n < 10 ? '0' : '') + n;
    }
    var seconds = input % 60;
    var minutes = Math.floor(input / 60);
    var hours = Math.floor(minutes / 60);
    return (z(hours) + ':' + z(minutes) + ':' + z(seconds));
  };
});


app.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
