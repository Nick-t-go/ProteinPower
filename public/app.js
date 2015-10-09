/**
 * Created by uzer-y on 10/4/15.
 */
var app = angular.module('StoreApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        });

    $stateProvider
        .state('store', {
            url: '/store',
            templateUrl: 'store.html'
        });
    $stateProvider
        .state('details', {
            url: 'details/:_id',
            templateUrl: '/details.html',
            resolve: {
                item: function ($stateParams, ItemsFactory) {
                    return ItemsFactory.getOneItem($stateParams._id)
                }
            },
            controller: function ($scope, ItemsFactory, item) {
                console.log(item)
                $scope.item = item;
            }
        });
    $stateProvider
        .state('cart', {
            url: '/cart',
            templateUrl: 'cart.html'
        });
});