'use strict';

const gulp = require("gulp");
const ts = require("gulp-typescript");
const sm = require("gulp-sourcemaps");
const del = require("del");

let tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['build']);

gulp.task('clean', (callback) => {
    del(['lib/**/*.js', 'lib/**/*.js.map']).then(() => {
        callback();
    }).catch(e => {
        callback(e);
    })
});

gulp.task('build', ['clean'], () => {
    return gulp.src(['lib/**/*.ts', 'typings/main.d.ts'], {base: '.'})
        .pipe(sm.init())
        .pipe(ts(tsProject))
        .js
        .pipe(sm.write())
        .pipe(gulp.dest('.'));
});