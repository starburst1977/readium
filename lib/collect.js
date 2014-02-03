module.exports = function(grunt) {
    'use strict';

    return function collect() {
        var done     = this.async(),
            fs       = require('fs'),
            path     = require('path'),
            archiver = require('archiver'),
            baseDir  = path.resolve(__dirname + '/..'),
            output   = fs.createWriteStream(baseDir + '/dist/latest.zip'),
            archive  = archiver('zip');

        output.on('close', function() {
            grunt.log.writeln('archiver has been finalized and the output file descriptor has closed.');
            done();
        });

        archive.on('error', function(err) {
            throw err;
        });

        archive.pipe(output);

        archive.append(fs.createReadStream(baseDir + '/default.hbs'), { name: 'readium/default.hbs' })
               .append(fs.createReadStream(baseDir + '/index.hbs'), { name: 'readium/index.hbs' })
               .append(fs.createReadStream(baseDir + '/post.hbs'), { name: 'readium/post.hbs' })
               .append(fs.createReadStream(baseDir + '/page.hbs'), { name: 'readium/page.hbs' })
               .append(fs.createReadStream(baseDir + '/README.md'), { name: 'readium/README.md' })
               .append(fs.createReadStream(baseDir + '/assets/js/readium-built.js'), { name: 'readium/assets/js/readium.js' })
               .append(fs.createReadStream(baseDir + '/assets/js/require.js'), { name: 'readium/assets/js/require.js' })
               .append(fs.createReadStream(baseDir + '/assets/css/main.css'), { name: 'readium/assets/css/main.css' })
               .bulk([{ expand: true, cwd: baseDir + '/assets/fonts', src: ['*'], dest: 'readium/assets/fonts' }])
               .bulk([{ expand: true, cwd: baseDir + '/vendor/Font-Awesome/fonts', src: ['*'], dest: 'readium/assets/fonts' }]);

        archive.finalize(function(error, bytes) {
            if (error) {
                throw error;
            }

            grunt.log.writeln(bytes + ' total bytes');
        });
    };
};