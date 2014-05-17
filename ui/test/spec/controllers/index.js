'use strict';

describe('Controller: IndexController', function() {

    // load the controller's module
    beforeEach(module('landartApp'));

    var IndexController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
            $scope: scope
        });
    }));

    it('should attach data with message Hello World to the scope', function() {
        expect(scope.msg).toBe("Hello World!");
    });
});
