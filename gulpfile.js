"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const merge = require("merge-stream");
var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var count = require("gulp-count");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./dist/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp
    .src("./node_modules/bootstrap/dist/**/*")
    .pipe(gulp.dest("./assets/vendor/bootstrap"))
    .pipe(count("## assets copied bootstrap"));
  // jQuery
  var jquery = gulp
    .src([
      "./node_modules/jquery/dist/*",
      "!./node_modules/jquery/dist/core.js",
    ])
    .pipe(gulp.dest("./assets/vendor/jquery"))
    .pipe(count("## assets copied jquery"));
  // BoxIcons
  var boxicons = gulp
    .src("./node_modules/boxicons/css/**/*")
    .pipe(gulp.dest("./assets/vendor/boxicons/css"))
    .pipe(count("## assets copied boxicons css"));

  var boxicons_fonts = gulp
    .src("./node_modules/boxicons/fonts/**/*")
    .pipe(gulp.dest("./assets/vendor/boxicons/fonts"))
    .pipe(count("## assets copied boxicons fonts"));

  return merge(bootstrap, jquery, boxicons, boxicons_fonts);
}

// Watch files
function watchFiles() {
  gulp.watch("./**/*.css", browserSyncReload);
  gulp.watch("./**/*.js", browserSyncReload);
  gulp.watch("./**/*.html", browserSyncReload);
}

//script paths
var jsFiles = "assets/js/**/*.js",
  jsDest = "dist/assets/js";

//      .pipe(uglify())

function MinScripts() {
  return gulp
    .src(jsFiles)
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest(jsDest))
    .pipe(rename("scripts.min.js"))
    .pipe(gulp.dest(jsDest))
    .pipe(count("## assets copied"));
}

// Gulp task to minify CSS files
function MinStyles() {
  return (
    gulp
      .src("./assets/css/*.css")
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer())
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest("./dist/assets/css"))
      .pipe(count("## assets copied"))
  );
}

// Gulp task to minify HTML files
function MinPages() {
  return gulp
    .src(["./index.html", "./terms.html", "./mark-hazleton.html"])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(count("## assets copied"));
}
function processBaseFiles() {
  return gulp
    .src([
      "./sitemap.xml",
      "./robots.txt",
      "./rss.xml",
      "./web.config",
      "./favicon.ico",
    ])
    .pipe(gulp.dest("./dist/"))
    .pipe(count("## assets copied"));
}

/*

*/

function jsVendorBundle() {
  return gulp
    .src([
      "assets/vendor/jquery/jquery.min.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/jquery.easing/jquery.easing.min.js",
      "assets/vendor/counterup/counterup.min.js",
      "assets/vendor/owl.carousel/owl.carousel.min.js",
      "assets/vendor/waypoints/jquery.waypoints.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/venobox/venobox.min.js",
      "assets/vendor/aos/aos.js",
      "assets/vendor/gh-profile-card/gh-profile-card.min.js",
    ])
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("assets/js/"))
    .pipe(gulp.dest("dist/assets/js/"));
}
/*

*/
function cssVendorBundle() {
  return gulp
    .src([
      "assets/vendor/bootstrap/css/bootstrap.min.css",
      "assets/vendor/boxicons/css/boxicons.min.css",
      "assets/vendor/owl.carousel/assets/owl.carousel.min.css",
      "assets/vendor/icofont/icofont.min.css",
      "assets/vendor/remixicon/remixicon.css",
      "assets/vendor/venobox/venobox.css",
      "assets/vendor/aos/aos.css",
    ])
    .pipe(concat("vendor.css"))
    .pipe(gulp.dest("assets/css/"))
    .pipe(gulp.dest("dist/assets/css/"));
}

function processVendorFonts() {
  return gulp
    .src([
      "assets/vendor/boxicons/fonts/boxicons.woff",
      "assets/vendor/boxicons/fonts/boxicons.woff2",
      "assets/vendor/boxicons/fonts/boxicons.ttf",
      "assets/vendor/boxicons/fonts/boxicons.eot",
      "assets/vendor/boxicons/fonts/boxicons.svg",
    ])
    .pipe(gulp.dest("dist/assets/fonts/"))
    .pipe(gulp.dest("assets/fonts/"))
    .pipe(count("## assets copied"));
}

function processVendorFonts2() {
  return gulp
    .src([
      "assets/vendor/icofont/fonts/icofont.woff",
      "assets/vendor/icofont/fonts/icofont.woff2",
    ])
    .pipe(gulp.dest("dist/assets/css/fonts/"))
    .pipe(gulp.dest("assets/css/fonts/"))
    .pipe(count("## assets copied"));
}

function processVendorFonts3() {
  return gulp
    .src([
      "assets/vendor/remixicon/remixicon.eot",
      "assets/vendor/remixicon/remixicon.ttf",
      "assets/vendor/remixicon/remixicon.woff",
      "assets/vendor/remixicon/remixicon.woff2",
    ])
    .pipe(gulp.dest("dist/assets/css/"))
    .pipe(gulp.dest("assets/css/"))
    .pipe(count("## assets copied"));
}

function processImages() {
  return gulp
    .src("./assets/img/**/*.{png,jpg,gif,jpeg,ico,PNG,JPG,GIF,JPEG,ICO}", {
      base: "./",
    })
    .pipe(gulp.dest("./dist/"))
    .pipe(count("## assets copied"));
}

// Define complex tasks
const loadvendor = gulp.series(clean, modules);
const build = gulp.series(
  loadvendor,
  MinScripts,
  MinStyles,
  MinPages,
  processImages,
  processBaseFiles,
  processVendorFonts,
  processVendorFonts2,
  processVendorFonts3,
  cssVendorBundle,
  jsVendorBundle
);
const watch = gulp.series(
  build,
  gulp.parallel(watchFiles, browserSync, processImages)
);

// Export tasks
exports.clean = clean;
exports.loadvendor = loadvendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
