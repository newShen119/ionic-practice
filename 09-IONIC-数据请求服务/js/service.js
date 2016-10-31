
/**
 * starter.service
 */

angular.module("starter.service", [])

    .factory('HomeFactory',['$rootScope','HttpJsonp',function($rootScope,HttpJsonp){

        var page = 1;           //第page页
        var results = [];       //累计page
        var hasData = true ;    //默认还有数据
        var url_0 = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=';
        return {

            loadMore:function(){

                var url_1 =url_0+page;
                HttpJsonp.getData(url_1)
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

    //2.拼接字符串
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
    
    //homecontentfactory
    .factory('homeContentFactory',['$rootScope','HttpJsonp',function($rootScope,HttpJsonp){

        var url_h = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=';
        var result ;
        var hasLoading = true ;
        
        return{

            showContent:function(id){

                var url = url_h + id ;

                HttpJsonp.getData(url)

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
