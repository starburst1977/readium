module.exports = function Gruntfile(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'release-it': {
            options: {
                pkgFiles: ['package.json'],
                commitMessage: 'Release %s',
                tagName: '%s',
                tagAnnotation: 'Release %s',
                buildCommand: 'grunt build',
                distRepo: false,
                distStageDir: '.stage',
                distFiles: ['dist/**/*'],
                distBase: 'dist',
                publish: false
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assets/js/readium-built.js',
                dest: 'assets/js/readium-built.js'
            }
        },
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
        },
        watch: {
            css: {
                files: 'assets/sass/main.sass',
                dest: 'assets/css/main.css',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-release-it');

    grunt.registerTask('listen', ['watch']);
    grunt.registerTask('build', ['sass', 'requirejs', 'uglify']);
    grunt.registerTask('default', ['requirejs']);

};