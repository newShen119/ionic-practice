/**
 * Created by Administrator on 2016/7/29 0029.
 */
angular.module("myApp.controller", ['myApp.services'])

.controller('HomeCtrl',function($scope,$state,$http,HomeFactory){

        $scope.hasLoading=true;

        $scope.$on('HomeFactoryUpdate',function(event,data){   //接收数据
            $scope.items = data;
            $scope.hasLoading=false;
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
        });

        //加载更多
        $scope.loadMore=function(){
            HomeFactory.loadMore();
        }

        $scope.hasData=function(){
            return HomeFactory.hasData();
        }
})
/*

 url: '/home-content/:id',


$stateParams  获取传过来的值
*
* */
.controller('HomeContentCtrl',['$scope','$state','$stateParams','$http',function($scope,$state,$stateParams,$http){

        //console.log($stateParams);
        $scope.hasLoading=true;
        $scope.aid=$stateParams.aid;

        console.log($scope.aid);

        var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+$scope.aid+'&callback=JSON_CALLBACK';

        $http({
            method: 'Jsonp',
            url:url
        }).success(function(data){
            console.log(data.result[0]);
            //$scope.item = data.result;
            //console.log($scope.items);

            $scope.item=data.result[0];
            $scope.hasLoading=false;

        }).error(function(error){
            console.log(error);
        })

    }])



.controller('ShopCtrl',function($scope,$state){

    //  $state.go('map');   /*js跳转*/

    console.log('ShopCtrl');
})


.controller('AccountCtrl',function($scope,$state){

    //  $state.go('map');   /*js跳转*/

    console.log('AccountCtrl');
})



