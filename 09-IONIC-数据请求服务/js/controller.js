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

        $scope.loadMore=function(){

            HomeFactory.loadMore();
        }

        $scope.hasData=function(){
            return HomeFactory.hasData();
        }

    }])
        
    //1HomeContentCtrl
    .controller('HomeContentCtrl',['$scope','$stateParams','homeContentFactory',function($scope,$stateParams,homeContentFactory){

        $scope.aid = $stateParams.aid;
        console.log($stateParams);
        $scope.hasLoading=true;

        ($scope.showContent = function () {
            homeContentFactory.showContent($scope.aid);
        })();

        $scope.$on('HomeContentFactoryUpdate',function (event,data){

            $scope.item = data ;
            $scope.hasLoading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
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


