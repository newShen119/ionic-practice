/**
 * Created by Administrator on 2016/7/29 0029.
 */

angular.module("starter.controller", [])

    //1.HomeCtrl:  /*http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1*/
    .controller('HomeCtrl',['$scope','$state','$http',function($scope,$state,$http){

        $http({
            method:'Jsonp',
            url:'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK'
        }).success(function (data) {

            $scope.items = data.result;
            console.log($scope.items);

        }).error(function (data) {

            console.log(error);
        })
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


