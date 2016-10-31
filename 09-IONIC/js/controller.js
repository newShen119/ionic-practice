/**
 * Created by Administrator on 2016/7/29 0029.
 */

angular.module("starter.controller", ['starter.service'])


    .controller('HomeCtrl',['$scope','$state','$http','HomeFactory',function($scope,$state,$http,HomeFactory){
        $scope.hasLoading=true;
        $scope.$on('HomeFactoryUpdate',function(event,data){
            $scope.items = data;
            $scope.hasLoading=false;
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
        })
        $scope.loadMore = HomeFactory.loadMore;
        $scope.hasData = HomeFactory.hasData;
    }])

    .controller('HomeContentCtrl',['$scope','$stateParams','HomeContentFactory',function($scope,$stateParams,HomeContentFactory){
        $scope.aid = $stateParams.aid;
        $scope.hasLoading=true;
        $scope.showContent = HomeContentFactory.showContent($scope.aid);
        $scope.$on('HomeContentFactoryUpdate',function (event,data){
            $scope.item = data ;
            $scope.hasLoading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
        })
    }])


    .controller('myCtrl',function($scope,$state){
    })


    .controller('HealthCtrl',function($scope,$state){
    })


    .controller('FindCtrl',['$scope','$state','$http','FindFactory',function($scope,$state,$http,FindFactory){
        $scope.loadMore = FindFactory.loadMore;
        $scope.hasData = FindFactory.hasData;
        $scope.$on('FindFactoryUpdate',function(event,data){
            $scope.items = data;
            console.log($scope.items );
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
        })
    }])

    .controller('sideContentController',function($scope,$ionicSideMenuDelegate){

    })


