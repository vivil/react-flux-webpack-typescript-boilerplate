var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var BrowserSync = require("browser-sync")
var webpackConfig = require("./webpack.config.js");

gulp.task("webpack", function(callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack:dev", function(callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "sourcemap";
  myConfig.debug = true;
  myConfig.watch = true;
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack:dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('browser-sync', function() {
  var browserSync = require('browser-sync');
  browserSync({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("./public/**", function () {
    browserSync.reload();
  })
  process.on('exit', function() {
     browserSync.exit();
  });
});

gulp.task("default", ["webpack:dev", "browser-sync"]);
