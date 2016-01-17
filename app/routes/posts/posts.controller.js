/**
 * Created by ManjeshV on 17/01/16.
 */
mainapp.controller('PostsCtrl', ['$scope','$stateParams', 'postFactory', function ($scope,$stateParams,postFactory) {
        // $scope.name=posts.name;

        $scope.id = postFactory.je;

        $scope.addComment = function(){
            if($scope.body === '') { return; }
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });
            $scope.body = '';
        };

    }]
);