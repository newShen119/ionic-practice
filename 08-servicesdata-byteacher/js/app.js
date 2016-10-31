/**
 * Created by Administrator on 2016/7/29 0029.
 */
var app = angular.module("myApp", ['ionic','myApp.controller']);


console.log(app);

app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');   /*背景颜色值*/
    $ionicConfigProvider.platform.ios.tabs.position('bottom');   /*导航位置*/
    $ionicConfigProvider.platform.android.tabs.style('standard');  /*背景颜色值*/
    $ionicConfigProvider.platform.android.tabs.position('standard'); /*导航位置*/

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    /*返回按钮的图标*/
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    /*转场效果*/
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $ionicConfigProvider.backButton.previousTitleText(false);   /*去掉返回按钮自带的  上一个导航名称*/




    $stateProvider

        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:

        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'templates/tab-home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('tab.home-content', {
            url: '/home-content/:aid',   /* url: '/home-content/:id/:cid',*/   /*    /home-content/:id    */
            views: {
                'tab-home': {
                    templateUrl: 'templates/tab-home-content.html',
                    controller: 'HomeContentCtrl'
                }
            }
        })

        .state('tab.shop', {
            url: '/shop',
            views: {
                'tab-shop': {
                    templateUrl: 'templates/tab-shop.html',
                    controller: 'ShopCtrl'
                }
            }
        })
        .state('tab.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        })

    $urlRouterProvider.otherwise('/tab/home');   /*没有找到路由的时候默认的跳转页面*/
});
