import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import pug from 'gulp-pug';
import prettier from 'gulp-prettier';
import sourcemaps from 'gulp-sourcemaps';
import browserSyncLib from 'browser-sync';
import { deleteAsync } from 'del';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssDeclarationSorter from 'css-declaration-sorter';
import fs from 'fs';

const browserSync = browserSyncLib.create();
const sass = gulpSass(dartSass);

// Paths
const paths = {
  scss: {
    src: ['src/scss/**/*.scss', '!src/scss/**/_*{,/**}'],
    all: 'src/scss/**/*.scss',
    dest: 'dist/css',
    format: ['src/scss/**/*.scss', '!src/scss/vendor/**'],
  },
  pug: {
    src: ['src/pug/**/*.pug', '!src/pug/**/_*{,/**}'],
    all: 'src/pug/**/*.pug',
    dest: 'dist',
    format: ['src/pug/**/*.pug', '!src/pug/vendor/**'],
  },
  js: {
    src: ['src/js/**/*.js', '!src/js/**/_*{,/**}'],
    all: 'src/js/**/*.js',
    dest: 'dist/js',
    format: ['src/js/**/*.js', '!src/js/vendor/**'],
  },
  assets: {
    folders: ['src/font', 'src/img', 'src/video'],
    dest: 'dist',
  },
  dist: 'dist',
};

// Clean
export async function clean() {
  await deleteAsync([paths.dist]);
}

// SCSS
export function processSCSS() {
  return gulp
    .src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(),
      cssDeclarationSorter({ order: 'alphabetical' }) // or 'smacss'
    ]))
    .pipe(prettier({ singleQuote: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// PUG
export function processPUG() {
  return gulp
    .src(paths.pug.src)
    .pipe(pug())
    .pipe(prettier({ singleQuote: true, singleAttributePerLine: false }))
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(browserSync.stream());
}

// JS
export function processJS() {
  return gulp
    .src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(prettier({ singleQuote: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// Copy Assets
export function copyAssets() {
  const existingFolders = paths.assets.folders.filter(folder => fs.existsSync(folder));
  if (!existingFolders.length) return Promise.resolve();

  const srcPaths = existingFolders.map(folder => `${folder}/**/*`);
  return gulp
    .src(srcPaths, { base: 'src', allowEmpty: true, encoding: false })
    .pipe(gulp.dest(paths.assets.dest))
    .pipe(browserSync.stream({ match: '**/*.*' }));
}

// Dynamic formatting task
export const format = gulp.parallel(
  ...Object.entries(paths)
    .filter(([key, value]) => value.format) // only entries with a format key
    .map(([key, value]) =>
      function formatTask() {
        return gulp
          .src(value.format, { base: './' })
          .pipe(prettier({ singleQuote: true, ...(key === 'scss' ? { bracketSameLine: true, printWidth: 120 } : {}), ...(key === 'pug' ? { singleAttributePerLine: false } : {}) }))
          .pipe(gulp.dest('./'));
      }
    )
);

// BrowserSync
function serve() {
  browserSync.init({
    server: { baseDir: paths.dist },
    port: 3000,
    open: true,
    notify: false,
  });

  gulp.watch(paths.scss.all, processSCSS);
  gulp.watch(paths.pug.all, processPUG);
  gulp.watch(paths.js.all, processJS);

  // Watch assets dynamically
  paths.assets.folders.forEach(folder => gulp.watch(`${folder}/**/*`, copyAssets));

  gulp.watch(`${paths.dist}/*.html`).on('change', browserSync.reload);
}

// Task Exports
export const build = gulp.series(
  clean,
  gulp.parallel(processSCSS, processPUG, processJS, copyAssets)
);
export const watch = gulp.series(build, serve);
export default watch;
