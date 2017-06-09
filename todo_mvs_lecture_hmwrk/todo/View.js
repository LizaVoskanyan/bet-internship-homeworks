/**
 * Created by liza on 09.06.2017.
 */

'use strict';
var View = function () {
    var updateView = function ( todos ) {
        $('#todoList li').remove();
        for( var i = 0, len = todos.length; i < len; i++ ){
            $('#todoList')
                .append( '<li>' + todos[i]
                    + '<a data-index="' + i + '" href="#">remove</a></li>');
        }
    };

    //set the handlers for the view
    var initView = function(){
        //add
        $('#addTodoButton').on("click", function(){
            var event = jQuery.Event("addItem");
            event.todo = $('#addTodo')[0].value;
            $(document.body).trigger(event);
            $('#addTodo')[0].value = '';
        });
        // track enter key
        $('#addTodo').on("keypress", function(e){
            if(e.which == 13){
                var event = jQuery.Event("addItem");
                event.todo = $('#addTodo')[0].value;
                $(document.body).trigger(event);
                $('#addTodo')[0].value = '';
            }
        });

        $('#todoList').on('click', 'a', function(e){
            var $todo = e.currentTarget;
            var event = jQuery.Event("deleteItem");
            event.index = $($todo).attr('data-index');
            $(document.body).trigger(event);
        });
    };
    initView();

    return  {
        updateView: function (todos) {
            updateView(todos);
        }
    };
};
