/**
 * Created by Administrator on 2016/7/29 0029.
 */

angular.module("starter.controller", [])

    // 1.HomeCtrl
    .controller('HomeCtrl',function($scope,$state){

        $scope.items=[];


        for(var i=0;i<20;i++){

            $scope.items.push('this is '+i+' item');

        }
    })

    //1.1
    .controller('HomeArticleCtrl',function($scope,$state){

        console.log('HomeArticleCtrl');

    })


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


