define(['jquery'], function() {
    'use strict';

    var classes = $('body').attr('class').split(/\s+/),
        page;

    $.each(classes, function(key, item) {
        if (/(\w+)-template/.test(item)) {
            page = item.replace('-template', '');
        }

        if ('page' === item) {
            page = 'page';
        }
    });

    return {
        isPost: function isPost() {
            return page === 'post';
        },
        isPage: function isPage() {
            return page === 'isPage';
        },
        isHome: function isHome() {
            return page === 'home';
        }
    };
});