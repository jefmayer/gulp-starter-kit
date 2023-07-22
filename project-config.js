// Project Config for Task Runner
module.exports = {
  paths: {
    sass: {
      appSass: {
        file: './assets/src/scss/app.scss',
        outputStyle: 'compressed',
        sourceMap: true,
        watch: ['./assets/src/scss/app.scss', './assets/src/scss/**/*.scss'],
        dest: 'assets/dist/css',
        filename: 'app',
        files: [],
      },
    },
    js: {
      appJs: {
        source: './assets/src/js/app.js',
        watch: ['./assets/src/js/app.js', './assets/src/js/modules/**/*.js', './assets/src/js/utils/**/*.js'],
        dest: 'assets/dist/js',
        filename: 'app',
        files: [],
        webpackConfig: 'default',
      },
    },
    html: {
      dest: './build',
      watch: './Views/**/*.html',
    },
    server: {
      watch: [
        './assets/dist/css/*.css',
        './assets/dist/js/*.js',
        './build/**/*.html',
      ],
    },
  },
};
