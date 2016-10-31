/**
 * Created by Administrator on 2016/7/29 0029.
 */
//定义一个模块，模块下面有三个控制器
angular.module('starter.controllers',[])

.controller('mapController',function($scope,$state){
    console.log('mapController');
    //$state.go('map');   /*js跳转*/
})

.controller('musicController',function($scope,$state){
    //  $state.go('map');   /*js跳转*/
    console.log('musicController');
})

.controller('articleController',function($scope,$state){
    //  $state.go('map');   /*js跳转*/
    console.log('articleController');
})