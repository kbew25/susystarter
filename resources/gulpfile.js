//load plugins
var gulp = require('gulp'),
compass = require('gulp-compass'),
autoprefixer = require('gulp-autoprefixer'),
cleanCSS = require('gulp-clean-css'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
plumber = require('gulp-plumber'),
path = require('path'),
browserSync = require('browser-sync').create();

//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
  title:'Gulp',
  icon: path.join(__dirname,'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = {
  errorHandler: notify.onError({
    title: notifyInfo.title,
    icon: notifyInfo.icon,
    message: "Error: <%= error.message %>"
  })
};

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

//styles
gulp.task('styles',function() {
  return gulp.src(['sass/*.scss'])
  .pipe(plumber(plumberErrorHandler))
  .pipe(compass({
    config_file:'config.rb',
    css:'stylesheets',
    sass:'sass',
  }))
  .pipe(autoprefixer('last 2 version','safari 5','ie 7','ie 8','ie 9','opera 12.1','ios 6','android 4'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('stylesheets'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

//scripts
gulp.task('scripts',function() {
  return gulp.src('js/*.js')
  .pipe(plumber(plumberErrorHandler))
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('js'));
});

//watch
gulp.task('watch',['browserSync', 'styles', 'scripts'],function(){
  gulp.watch('sass/*.scss',['styles']);
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch('js/*.js',['scripts']);
});
