const GulpClient = require('gulp');
const { series, src, dest, watch } = require('gulp');

const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');

function dashTemplates(cb) {
  src('public/javascripts/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'dash.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(dest('public/javascripts/'));
                cb();
}

function watchFiles(cb) {
        watch("public/javascripts/templates/**/*.hbs", dashTemplates);
        //watch("public/js/**.js", );
}

exports.watch = watchFiles; // gulp watch
exports.dashTemplates = dashTemplates;
exports.default = series(dashTemplates); // future templates