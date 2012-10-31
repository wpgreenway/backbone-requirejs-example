// Configure requireJS
require.config({

    baseUrl: 'js',

    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        underscore: '/cdn/underscore-1.4.2-min',
        backbone: '/cdn/backbone-0.9.2'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }

});

if(console === undefined) {
    console = {
        log: function() {}
    };
}

console.log('I made it to main.js!');
require(['app/app'], function(app) {
    app.start();
});