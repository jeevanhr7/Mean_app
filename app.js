angular.module('mainApp', []).factory('$exceptionHandler', function() {
    return function(exception, cause) {
        exception.message += ' (caused by "' + cause + '")';
        throw exception;
    };
});


var mainapp = angular.module('mainApp', []);
mainapp.controller('control', function ($scope) {
    $scope.firstname = "jeevan";
    $scope.student=[{'Names1':'jeevan', 'sub':'Physics'},{'Names1':'Tejas', 'sub':'Maths'},{'Names1':'Chethan', 'sub':'Chemistry'}]
});
