'use strict';

App.factory('Index', function($resource) {
    return $resource('/api/test');
});
