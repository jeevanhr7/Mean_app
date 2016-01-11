angular.module('mainApp', []).factory('$exceptionHandler', function() {
    return function(exception, cause) {
        exception.message += ' (caused by "' + cause + '")';
        throw exception;
    };
});


var mainapp = angular.module('mainApp', []);
mainapp.controller('control', function ($scope) {
    $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];

    $scope.addpost=function()
    {
        $scope.posts.push({'title':'A new Post','upvotes':0})
    }

    $scope.removepost=function()
    {
        $scope.posts.shift();
    }

});
