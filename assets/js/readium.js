'use strict';

require.config({
    baseUrl: '/assets/js',
    paths: {
        jquery: '/vendor/jquery/jquery',
        menu: '/vendor/jQuery.mmenu/src/js/jquery.mmenu.min',
        hljs: '/vendor/highlightjs/highlight.pack'
    },
    shim: {
        hljs: {
            exports: 'hljs'
        },
        menu: {
            deps: ['jquery'],
            exports: 'jQuery.fn.mmenu'
        }
    }
});

require(['jquery', 'hljs', 'sidebar'], function($, hljs, sidebar) {
    var cover     = $('img[alt="img-post-cover"]'),
        container = $('#img-post-cover');

    if (cover.length > 0) {
        container = $('#img-post-cover');
        container.css('background-image', 'url(' + cover.attr('src') + ')');

        cover.remove();
        return;
    }

    hljs.initHighlighting();
    container.remove();
    sidebar.init();
});