module.exports = function(grunt) {

  grunt.initConfig({
    meta: {
      version: '0.1.0'
    },

    requirejs: {
      baseUrl: 'js',
      mainConfigFile: 'js/main.js',
      paths: {
        'backbone': 'empty:', 
        'underscore': 'empty:' 
      },
      name: "main",
      out: "js/main-built.js",
      exclude: ['backbone', 'underscore', 'jquery']
    }

  });

  grunt.registerTask('default', 'requirejs');

  grunt.loadNpmTasks('grunt-requirejs');

};