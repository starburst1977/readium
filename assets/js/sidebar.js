define(['jquery', 'menu'], function($) {
    'use strict';

    var container = $('#side-menu'),
        button    = $('a[href="#side-menu"]'),
        config    = { classes: 'mm-slide' },
        isOpen    = false;

    function onStateChange() {
        isOpen = !isOpen;
    }

    function onIconClick() {
        if (!isOpen) {
            return;
        }

        container.trigger('close.mm');
    }

    return {
        init: function init() {
            button.on('click', onIconClick);
            container.show()
                     .mmenu(config, config)
                     .on('open.mm close.mm', onStateChange);
        }
    };
});