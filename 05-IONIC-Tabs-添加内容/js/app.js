/**
 * Created by Administrator on 2016/7/29 0029.
 */
var app = angular.module("starter", ['ionic','starter.controller']);
app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

	//tab-style：tabs背景颜色
	$ionicConfigProvider.platform.ios.tabs.style('standard'); 
	$ionicConfigProvider.platform.android.tabs.style('standard');

	//tab-position：tabs位置 top/bottom
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.position('bottom');

	//navBar.alignTitle：标题位置center/left/right
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');

	//返回按钮的图标
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

	//转场效果
	$ionicConfigProvider.platform.ios.views.transition('ios'); 
	$ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider

        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        //tab-home HomeCtrl
        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'templates/tab-home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        //HomeArticleCtrl
        .state('tab.home_article', {
            url: '/home_article',
            views: {
                'tab-home': {
                    templateUrl: 'templates/tab-home-article.html',
                    controller: 'HomeArticleCtrl'
                }
            }
        })

        //tab-my myCtrl
        .state('tab.my', {
	        url: '/my',
	        views: {
	            'tab-my': {
	                templateUrl: 'templates/tab-my.html',
	                controller: 'myCtrl'
	            }
	        }
    	})

	    //tab-health HealthCtrl
	    .state('tab.health', {
	        url: '/health',
	        views: {
	            'tab-health': {
	                templateUrl: 'templates/tab-health.html',
	                controller: 'HealthCtrl'
	            }
	        }
	    })

	    //tab.find FindCtrl
	    .state('tab.find', {
	        url: '/find',
	        views: {
	            'tab-find': {
	                templateUrl: 'templates/tab-find.html',
	                controller: 'FindCtrl'
	            }
	        }
	    })

    $urlRouterProvider.otherwise('/tab/home');
});

