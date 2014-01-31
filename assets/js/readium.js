'use strict';

require.config({
    name: 'readium',
    out: 'readium.min.js',
    baseUrl: '/assets/js',
    dir: '../../../readium',
    paths: {
        jquery: '/vendor/jquery/jquery',
        hljs: '/vendor/highlightjs/highlight.pack',
        fluidbox: '/vendor/fluidbox/jquery.fluidbox',
        imagesloaded: '/vendor/imagesloaded/imagesloaded',
        'eventEmitter/EventEmitter': '/vendor/eventEmitter/EventEmitter',
        'eventie/eventie': '/vendor/eventie/eventie',
        headroomBase: '/vendor/headroom.js/dist/headroom',
        headroom: '/vendor/headroom.js/dist/jQuery.headroom'
    },
    shim: {
        fluidbox: {
            deps: ['imagesloaded', 'eventEmitter/EventEmitter', 'eventie/eventie'],
            exports: 'jQuery.fn.fluidbox'
        },
        imagesloaded: {
            deps: ['jquery'],
            exports: 'jQuery.fn.imagesloaded'
        },
        hljs: {
            exports: 'hljs'
        },
        headroom: {
            deps: ['jquery', 'headroomBase'],
            exports: 'jQuery.fn.headroom'
        }
    }
});

require(['jquery', 'hljs', 'fluidbox', 'headroom'], function($, hljs) {
    var cover     = $('img[alt="img-post-cover"]'),
        container = $('#img-post-cover'),
        imageList = $('img');

    $('.sidebar__userimage').on('click', function() {
        location.href = '/';
    });

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

    $('#headroom').headroom({
        classes: {
            initial : 'headroom',
            pinned : 'pinned animated slideInDown',
            unpinned : 'unpinned animated slideOutUp'
        }
    });
});