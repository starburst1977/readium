define(function() {
    'use strict';

    var wordsPerSecond = 200;

    return function ttr(text) {
        var estimatedTime = Math.round((text.replace(/(<([^>]+)>)/ig, '').match(/\S+/g) || []).length / wordsPerSecond);

        return (estimatedTime > 0) ? estimatedTime : 1;
    };
});