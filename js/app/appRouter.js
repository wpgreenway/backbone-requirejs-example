define(function(require) {

    var Backbone = require('backbone');
    var MyModel = require('app/models/myModel');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            console.log('Hit the base route.');
            var myModel = new MyModel();
            myModel.doSomething();
        }
    });

    return AppRouter;

});