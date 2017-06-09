/**
 * Created by liza on 09.06.2017.
 */

'use strict';
var Controller = function (view, model) {
    var _view = view;
    var _model = model;

    // event binding
    var $body = $('body');
    $body.bind('addItem', function(e) {
        _model.addTodo(e.todo);
    });
    $body.bind('deleteItem', function(e) {
        _model.deleteTodo( e.index );
    });
    $body.bind('updateView', function(e) {
        _view.updateView( _model.getData() );
    });
};