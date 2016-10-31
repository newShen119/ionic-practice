
/**
 * starter.service
 */

angular.module("starter.service", [])

    .factory('HomeFactory',['$rootScope','HttpJsonp',function($rootScope,HttpJsonp){

        var page = 1;           //第page页
        var results = [];       //累计page
        var hasData = true ;    //默认还有数据
        var url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=';
        return {

            loadMore:function(){

                HttpJsonp.getData(url+page)
                .success(function (data) {

                    if(data.result.length<20){
                        hasData = false //么有数据了
                    }
                    results = results.concat(data.result);
                    $rootScope.$broadcast('HomeFactoryUpdate',results);   /*广播数据*/
                    page++;
                })
                .error(function (data) {
                    console.log(data);
                });
            },

            hasData:function(){
                return hasData ;
            }
        }
    }])

    .factory('HttpJsonp',['$http',function($http) {

        return {
            getData: function (url) {
                return $http({
                    method: 'Jsonp',
                    url: url + '&callback=JSON_CALLBACK'
                })
            }
        }
    }])

    .factory('HomeContentFactory',['$rootScope','HttpJsonp',function($rootScope,HttpJsonp){

        var url = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=';
        var result ;
        var hasLoading = true ;

        return{

            showContent:function(id){
                HttpJsonp.getData(url + id)
                    .success(function (data) {
                        result = data.result[0];
                        $rootScope.$broadcast('HomeContentFactoryUpdate',result);   /*广播数据*/

                    }).error(function(data){
                        console.log(data);
                })
            },

            hasLoading:function () {
                return hasLoading;
            }
        }
    }])

    .factory('FindFactory',['$rootScope','HttpJsonp',function($rootScope,HttpJsonp){

        var page = 1;           //第page页
        var results = [];       //累计page
        var hasData = true ;    //默认还有数据
        var url = 'http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page=';
        return {

            loadMore:function(){

                HttpJsonp.getData(url+page)
                    .success(function (data) {

                        if(data.result.length<20){
                            hasData = false //么有数据了
                        }
                        results = results.concat(data.result);
                        console.log(results);
                        $rootScope.$broadcast('FindFactoryUpdate',results);   /*广播数据*/
                        page++;
                    })
                    .error(function (data) {
                        console.log(data);
                    });
            },

            hasData:function(){
                return hasData ;
            }
        }
    }])