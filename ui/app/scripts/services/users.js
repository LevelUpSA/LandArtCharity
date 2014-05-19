'use strict';

App.factory('User', function($resource) {
    return $resource('/api/users');
});
