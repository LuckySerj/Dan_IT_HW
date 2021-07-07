const { src, dest, series, watch } = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  clean = require("gulp-clean"),
  browserSync = require("browser-sync"),
  minifyjs = require("gulp-js-minify"),
  cleanCSS = require("gulp-clean-css"),
  imagemin = require("gulp-imagemin");

const path = {
  dist: {
    css: "./dist/css/",
    js: "./dist/js/",
    img: "./dist/img/",
  },
  src: {
    scss: "./src/scss/**/*.scss",
    js: "./src/js/*.js",
    img: "./src/img/**/*",
    html: "./src/html/*.html",
  },
  clean: "./dist/",
};

function scssBuild() {
  return src(path.src.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest(path.dist.css));
}

function jsBuild() {
  return src(path.src.js)
    .pipe(concat("scripts.min.js"))
    .pipe(minifyjs())
    .pipe(dest(path.dist.js));
}

function cleanBuild() {
  return src(path.clean, { read: false }).pipe(clean());
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch(path.src.scss, scssBuild).on("change", browserSync.reload);
  watch(path.src.js, jsBuild).on("change", browserSync.reload);
}

function imgMinify() {
  return src(path.src.img).pipe(imagemin()).pipe(dest(path.dist.img));
}

exports.scssBuild = scssBuild;
exports.jsBuild = jsBuild;
exports.cleanBuild = cleanBuild;
exports.watcher = watcher;
exports.imgMinify = imgMinify;

exports.build = series(cleanBuild, scssBuild, jsBuild, imgMinify);
exports.dev = watcher;
