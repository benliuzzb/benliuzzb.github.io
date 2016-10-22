var app = angular.module('app',['ngRoute']);
app.config(['$routerProvider',function($routerProvider){
    $routerProvider
    .when('/',{
        templateUrl:'./assets/tpl/index.html',
        controller:''
    })
    .when('/blog',{
        templateUrl:'./assets/tpl/blog.html',
        controller: ''
    })
    .when('/book',{
        templateUrl:'./assets/tpl/book.html',
        controller: 'bookController'
    })
    .when('/about_me',{
        templateUrl:'./assets/tpl/about_me.html',
        controller: ''
    })
    .when('/bok_list/:id',{
        templateUrl:'./assets/tpl/book_list.html',
        controller: 'bookListController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])