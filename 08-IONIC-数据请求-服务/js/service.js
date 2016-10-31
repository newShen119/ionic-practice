
/**
 * starter.service
 */

angular.module("starter.service", [])

    .factory('HomeFactory',['$rootScope','$http',function($rootScope,$http){

        var page = 1;           //第page页
        var results = [];       //累计page
        var hasData = true ;    //默认还有数据

        return {

            loadMore:function(){

                console.log(page);

                $http({

                    method:'Jsonp',
                    url:'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+page+'&callback=JSON_CALLBACK'

                })

                .success(function (data) {
                    console.log(data.result);
                    if(data.result.length<20){
                        hasData = false //么有数据了
                    }
                    results = results.concat(data.result);
                    $rootScope.$broadcast('HomeFactoryUpdate',results);   /*广播数据*/
                    page++;
                })

                .error(function (data) {
                    console.log(error);
                });
                console.log(page);
            },

            hasData:function(){
                return hasData ;
            }
        }
    }])