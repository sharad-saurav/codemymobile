var app = angular.module('app', ['ui.router', 'ngTable']);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise('/home');


    $stateProvider.state('showUsers', {
        url: '/showUsers',
        templateUrl: 'showUsers.html',
        controller: 'showUserController'
    }).state('showFriends', {
        url: '/showFriends/:userId/user',
        templateUrl: 'showFriends.html',
        controller: 'ShowFriendController'
    }).state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeController'
    })
}])


