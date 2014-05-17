'use strict';

app.factory('Index', function($resource) {
    return $resource('/api/test');
});
