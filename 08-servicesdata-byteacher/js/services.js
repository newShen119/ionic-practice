/**
 * Created by Administrator on 2016/7/29 0029.
 */
angular.module("myApp.services", [])

    .factory('HomeFactory',function($http,$rootScope,HttpJsonp) {

        var page = 1;
        var results = '';
        var hasData = true;

        return{

            loadMore:function(){

                var url='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+page;

                HttpJsonp.getData(url).success(function(data){

                    if(data.result.length<20){

                        //么有数据了
                        hasData=false;
                    }

                    if(results!=''){
                        results= results.concat(data.result);    /*拼接以后赋值*/
                        // results.data = results.data.concat(r.result);
                    }else{
                        results=data.result;
                    }

                    $rootScope.$broadcast('HomeFactoryUpdate',results);   /*广播数据*/
                    ++page;
                })
            },

            hasData:function(){
              return hasData;
            }

        }
    })

    //实现 返回一个 $http
    .factory('HttpJsonp',function($http) {

        return {
            getData: function (url) {
                return $http({
                    method: 'Jsonp',
                    url: url + '&callback=JSON_CALLBACK'
                })
            }
        }
    })
 

