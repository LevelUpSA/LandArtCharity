'use strict';

App.factory('Artist', function($resource) {
    return $resource('/api/artists');
});
