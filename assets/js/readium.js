'use strict';

require.config({
    baseUrl: '/assets/js',
    paths: {
        jquery: '/vendor/jquery/jquery',
        menu: '/vendor/jQuery.mmenu/src/js/jquery.mmenu.min',
        hljs: '/vendor/highlightjs/highlight.pack',
        fluidbox: '/vendor/fluidbox/jquery.fluidbox',
        imagesloaded: '/vendor/imagesloaded/imagesloaded',
        'eventEmitter/EventEmitter': '/vendor/eventEmitter/EventEmitter',
        'eventie/eventie': '/vendor/eventie/eventie'
    },
    shim: {
        fluidbox: {
            deps: ['imagesloaded', 'eventEmitter/EventEmitter', 'eventie/eventie'],
            exports: 'jQuery.fn.fluidbox'
        },
        imagesloaded: {
            exports: 'jQuery.fn.imagesloaded'
        },
        hljs: {
            exports: 'hljs'
        },
        menu: {
            deps: ['jquery'],
            exports: 'jQuery.fn.mmenu'
        }
    }
});

require(['jquery', 'hljs', 'sidebar', 'fluidbox'], function($, hljs, sidebar) {
    var cover     = $('img[alt="img-post-cover"]'),
        container = $('#img-post-cover'),
        imageList = $('img');

    if (cover.length > 0) {
        container = $('#img-post-cover');
        container.css('background-image', 'url(' + cover.attr('src') + ')');

        cover.remove();
        return;
    }

    if (imageList.length > 0) {
        imageList.each(function() {
            $(this).wrap(function() {
                var image = $(this);

                return '<a data-fluidbox href="' + image.attr('src') + '"><img src="' + image.attr('src') + '"></a>';
            });
        });
    }

    $('a[data-fluidbox]').fluidbox({
        viewportFill: 0.8
    });

    hljs.initHighlighting();
    container.remove();
    sidebar.init();
});