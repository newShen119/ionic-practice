/**
 * Created by Administrator on 2016/7/29 0029.
 */

// 定义一个模块，这个模块需要依赖starter.controllers模块
var app = angular.module("myApp", ['ionic','starter.controllers']);
app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("map", {
            url: "/map",    /*href="#map  这种方式得配置url   还要注意url的格式*/
            templateUrl: "templates/map.html",
            controller:'mapController'
        })
        .state("music", {
            url: "/music",
            templateUrl:"templates/music.html",
            controller:'musicController'

        })
        .state("article", {
        url: "/article",
        templateUrl: "templates/article.html",
        controller:'articleController'

    });
    $urlRouterProvider.otherwise('/map');   /*没有找到路由的时候默认的跳转页面*/
});