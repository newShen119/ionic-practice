/**
 * Created by Administrator on 2016/7/29 0029.
 */

angular.module("starter.controller", ['starter.service'])

    .controller('HomeCtrl',['$scope','$state','$http','HomeFactory',function($scope,$state,$http,HomeFactory){

        $scope.loadMore=function(){

            HomeFactory.loadMore();
        }

        $scope.$on('HomeFactoryUpdate',function(event,data){
            $scope.items = data;
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
        })

        $scope.hasLoading = true ; //默认还有数据

    }])
        
    //1.1
    .controller('HomeContentCtrl',['$scope','$state','$http','$stateParams',function($scope,$state,$http,$stateParams){

        $scope.aid = $stateParams.aid;

        console.log($stateParams);
        
        $http({
            method:'Jsonp',
            url:'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+$scope.aid+'&callback=JSON_CALLBACK'
        }).success(function (data) {

            console.log(data)
            $scope.item=data.result[0];

        }).error(function(){

            console.log(error);
        })

    }])


    //2.myCtrl
    .controller('myCtrl',function($scope,$state){

        console.log('myCtrl');
    })

    //3.HealthCtrl
    .controller('HealthCtrl',function($scope,$state){

        console.log('HealthCtrl');
    })

    //4.FindCtrl
    .controller('FindCtrl',function($scope,$state){

        console.log('FindCtrl');
    })


