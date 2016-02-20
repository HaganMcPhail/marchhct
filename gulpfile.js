"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var sass = require('gulp-sass'); //Sass

var config = {
	port: 9006,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		smooth: 'node_modules/smoothscroll/smoothscroll.js',
		js: [
			'./src/**/*.js'
		],
		jquery: [
			'node_modules/jquery/dist/jquery.min.js'
		],
		bootstrap: [
			'node_modules/bootstrap/dist/js/bootstrap.min.js'
		],
		images: './src/images/*',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      		'node_modules/toastr/toastr.css',
			'./src/css/main.scss'
    	],
		dist: './dist',
		mainJs: './src/main.js'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('jquery', function() {
	gulp.src(config.paths.jquery)
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
});

gulp.task('bootstrap', function() {
	gulp.src(config.paths.bootstrap)
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
});

gulp.task('smooth', function() {
	gulp.src(config.paths.smooth)
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(sass())
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

// Migrates images to dist folder
// Note that I could even optimize my images here
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'js', 'jquery', 'bootstrap','smooth','css', 'images', 'lint', 'open', 'watch']);
