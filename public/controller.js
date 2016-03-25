(function() {
    'use strict';

    angular.module('app')
        .controller('page1Ctrl', function($scope){
            $scope.title = 'Page 1';
        })
        .controller('page2Ctrl', function($scope){
            $scope.title = 'Page 2';
        })
        .controller('LoginCtrl', ['$scope', '$http','$location',
            function(scope, $http, $location) {
                scope.isActive = function(viewLocation){
                    if(viewLocation ===("#" + $location.path()))
                        return "active";
                    else return null;
                }
                $http.get('/api/login').success(function(resp) {
                    scope.loginInfo = resp;
                });
                scope.logout = function() {
                    $http.delete('/api/login').success(function() {
                        scope.loginInfo = {};
                    })
                }
                scope.onLogin = function(info) {
                    console.log(scope.info, info);
                    scope.loginInfo = info;
                }
            }
        ])
})();
