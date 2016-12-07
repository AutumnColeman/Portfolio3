var app = angular.module('main', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state({
    name: 'home',
    url: '/',
    templateUrl: 'index.html'
  })
  .state({
    name: 'about',
    url: '/about',
    templateUrl: 'about.html'
  })
  .state({
    name: 'portfolio',
    url: '/portfolio',
    templateUrl: 'portfolio.html'
  })
  .state({
    name: 'contact',
    url: '/contact',
    templateUrl: 'contact.html'
  });

  $urlRouterProvider.otherwise('/');
});