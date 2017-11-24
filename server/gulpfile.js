var gulp    = require('gulp');
var concat = require('gulp-concat');
var uglify  = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var jsStylish = require('jshint-stylish');

// Set NODE_ENV to 'test'
gulp.task('env:test', function () {
  process.env.NODE_ENV = 'test';
});

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
  process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
  process.env.NODE_ENV = 'production';
});

// JS task
gulp.task('jshint', function() {
  return gulp.src([
    './const/*.js',
    './controllers/**/*.js',
    './helper/**/*.js',
    './routes/**/*.js',
    './services/**/*.js',
    './models/**/*.js'
  ]).pipe(jshint())
      .pipe(jshint.reporter(jsStylish));
});

gulp.task('default', ['jshint']);