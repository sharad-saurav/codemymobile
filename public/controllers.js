var tCtrl = angular.module('app');

tCtrl.controller('ShowFriendController', ['$scope', '$state', '$filter', 'NgTableParams', '$stateParams', 'UserService', function($scope, $state, $filter,  NgTableParams, $stateParams, UserService) {

    var userId = $state.params.userId;

    $scope.goShowFriends = function (id) {
        console.log(id);
        UserService.getFriends(id)
            .success(function(data) {
                console.log(data);
                $scope.firstName = data.firstName;
                $scope.users = data.friends;
                $scope.usersTable = new NgTableParams({
                    page: 1,
                    count: 10
                }, {
                    total: $scope.users.length,
                    getData: function (params) {
                        $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
                        $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                        $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                        return $scope.data;
                    }
                });
            },function (error) {
            })
    }

    UserService.getFriends(userId)
        .success(function(data) {
            console.log(data);
            $scope.users = data.friends;
            $scope.firstName = data.firstName;
            $scope.usersTable = new NgTableParams({
                page: 1,
                count: 10
            }, {
                total: $scope.users.length,
                getData: function (params) {
                    $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
                    $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                    $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    return $scope.data;
                }
            });
        },function (error) {
        })
}])

tCtrl.controller('showUserController', ['$scope', '$state',  '$filter', '$stateParams', 'NgTableParams', 'UserService', function($scope, $state, $filter, $stateParams, NgTableParams, UserService) {
        $scope.goShowFriends = function (id) {
            console.log(id);
            $state.go('showFriends', {userId: id});
        }

    UserService.getAllUsers()
        .success(function(data) {
            console.log(data);
        $scope.users = data;
        $scope.usersTable = new NgTableParams({
            page: 1,
            count: 10
        }, {
            total: $scope.users.length,
            getData: function (params) {
                $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
                $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                return $scope.data;
            }
        });
    },function (error) {
    })
}])
tCtrl.controller('homeController', ['$scope', '$state', 'UserService', function($scope, $state, UserService) {


}])