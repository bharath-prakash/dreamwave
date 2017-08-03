'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/materialize/css/materialize.css',
        'public/lib/material-design-icons/iconfont/material-icons.css',
        'public/lib/angular-materialize/css/materialize.clockpicker.css',
        'public/lib/swagger/dist/swagger-ui.css',
        'public/lib/swagger-editor/swagger-editor.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-sanitize/angular-sanitize.min.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-aria/angular-aria.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-router/release/stateEvents.js',
        'public/lib/angular-ui-utils/ui-utils.js',
         'public/lib/angular-file-upload/dist/angular-file-upload.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/materialize/js/materialize.js',
        'public/lib/angular-materialize/src/angular-materialize.js',
        'public/lib/swagger/dist/swagger-ui-bundle.js',
        'public/lib/swagger/dist/swagger-ui-standalone-preset.js',
        'public/lib/swagger-editor/swagger-editor-bundle.js',
        'public/lib/swagger-editor/swagger-editor-standalone-preset.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
