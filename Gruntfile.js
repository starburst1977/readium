module.exports = function Gruntfile(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: '.',
                    paths: {
                        jquery: 'vendor/jquery/jquery',
                        hljs: 'vendor/highlightjs/highlight.pack',
                        fluidbox: 'vendor/fluidbox/jquery.fluidbox',
                        imagesloaded: 'vendor/imagesloaded/imagesloaded',
                        'eventEmitter/EventEmitter': 'vendor/eventEmitter/EventEmitter',
                        'eventie/eventie': 'vendor/eventie/eventie',
                        headroomBase: 'vendor/headroom.js/dist/headroom',
                        headroom: 'vendor/headroom.js/dist/jQuery.headroom',
                        info: 'assets/js/info',
                        ttr: 'assets/js/ttr'
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
                    },
                    name: 'assets/js/readium.js',
                    out: 'assets/js/readium-built.js'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/sass/main.sass'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['requirejs']);

};