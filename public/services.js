var tSer = angular.module('app');

tSer.service('UserService', ['$http', function($http) {

    return {
        getFriends: function(userId) {
            return $http({
                method: "get",
                url: "api/user/" + userId,
            })
        },
        getAllUsers: function() {
            return $http({
                method: "get",
                url: "api/users",
            })
        },

        createUser: function(user) {
            console.log('user--', user);
            return $http({
                method: "post",
                url: "api/users",
                data: user
            })
        },

        addFriend: function(userId, friendId) {
            return $http({
                method: "put",
                url: "api/" + userId + "/user/" + friendId,
                data: ''
            })
        },
    }
}])