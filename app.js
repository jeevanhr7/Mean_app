var mainapp = angular.module('mainApp', []);
mainapp.controller('control', function ($scope) {

    $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];
    $scope.addpost = function () {
        if (!$scope.title | $scope.title === '') {
            return console.log('nothing Filled');
        }
        $scope.upvotes = +1;
        $scope.posts.push({'title': $scope.title, 'upvotes': $scope.upvotes});
        $scope.title = '';
    }
});