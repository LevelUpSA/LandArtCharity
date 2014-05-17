'use strict';

app.controller('IndexController', function($scope, Index) {
    $scope.greeting = "LandArtCharity App"

    $scope.buttonClick = function() {
        $scope.data = Index.get();
    };
});
