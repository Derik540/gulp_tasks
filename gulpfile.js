let gulp = require("gulp");
let sass = require("gulp-sass")(require("sass"));
let watch = require("gulp-watch");
let series = gulp.series;
let imagemin = require("gulp-imagemin");
let uglify = require("gulp-uglify");

function watchFile() {
  gulp.watch("./src/sass/*.scss", gulp.series(compileSass));
}

function watchImagens() {
  gulp.watch("./src/imagens/*", miniFy);
}

function watchJs() {
  gulp.watch("./src/js/*.js", function (cb) {
    console.log("Arquivo javascript alterado");
    cb();
  });
}

function miniFy() {
  return gulp
    .src("./src/imagens/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images/"));
}

function compileSass() {
  return gulp
    .src("./src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}

function minifyJs() {
  return gulp.src("./src/js/*").pipe(uglify()).pipe(gulp.dest("./dist/js/"));
}

exports.sass = compileSass;
exports.watchSass = watchFile;
exports.watchImages = watchImagens;
exports.imagemin = miniFy;
exports.WatchScript = watchJs;
exports.jscompressed = minifyJs;

exports.build = gulp.parallel(
  miniFy,
  compileSass,
  minifyJs,
  gulp.parallel(watchImagens, watchFile, watchJs)
);
