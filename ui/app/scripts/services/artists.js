'use strict';

app.factory('Artist', function($resource) {
    return $resource('/api/artists');
});
