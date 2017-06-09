/**
 * Created by liza on 09.06.2017.
 */

'use strict';
var Model = function () {
    var _todos = [];

    var notifyController = function () {
        $('body').trigger('updateView');
    };
    // public methods
    return  {
        addTodo: function ( todo ) {
            _todos.push(todo);
            notifyController();
        },
        editTodo: function( index, newTodo ){
            _todos[index] = newTodo;
        },
        deleteTodo: function ( index ) {
            _todos.splice(index,1);
            notifyController();
        },
        getData: function(){
            return _todos;
        }
    };
};