define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');

    var MyModel = Backbone.Model.extend({
        doSomething: function() {
            console.log('My model is doing something!');
            var successDiv = $('#success-div');
            successDiv.html('If you can see this, it works!');
            successDiv.show();
        }
    });

    return MyModel;
});