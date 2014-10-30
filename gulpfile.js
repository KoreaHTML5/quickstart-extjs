/**
 *
 *  Quickstart gulpfile.js
 *
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var shell = require('gulp-shell');

// Clean Output Directory
gulp.task('clean', del.bind(null, ['app/build']));

// Build and serve
gulp.task('serve', ['build'], shell.task([
    'sencha web start'
], {
    cwd: './app'
}));

// build sencha for production
gulp.task('build', shell.task([
    'sencha app build production'
], {
    cwd: './app'
}));

// build sencha for package
gulp.task('build:package', shell.task([
    'sencha app build package'
], {
    cwd: './app'
}));

// build sencha for testing
gulp.task('build:testing', shell.task([
    'sencha app build testing'
], {
    cwd: './app'
}));

// Build Production Files, the Default Task
gulp.task('default', ['build']);
