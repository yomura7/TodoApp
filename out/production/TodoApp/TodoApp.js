if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'TodoApp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TodoApp'.");
}
var TodoApp = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function main$lambda$lambda(closure$todoList) {
    return function (it) {
      var tmp$;
      var input = Kotlin.isType(tmp$ = document.querySelector('#input'), HTMLInputElement) ? tmp$ : throwCCE();
      closure$todoList.addTodo_61zpoe$(input.value);
      input.value = '';
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$todoList) {
    return function (it) {
      closure$todoList.clearTodoList();
      return Unit;
    };
  }
  function main$lambda$lambda_1(closure$todoList) {
    return function (it) {
      closure$todoList.clearDoneList();
      return Unit;
    };
  }
  function main$lambda(it) {
    var tmp$, tmp$_0, tmp$_1;
    var todoUl = document.querySelector('#todo_ul');
    var doneUl = document.querySelector('#done_ul');
    var todoList = new TodoManager(ensureNotNull(todoUl), ensureNotNull(doneUl));
    todoList.addTodo_61zpoe$('\u4ECA\u6708\u306E\u5BB6\u8CC3\u3092\u652F\u6255\u3046');
    todoList.addDone_61zpoe$('\u6D17\u5264\u3092\u8CB7\u3046');
    todoList.addDone_61zpoe$('\u672C\u68DA\u3092\u6383\u9664\u3059\u308B');
    (tmp$ = document.querySelector('#add_button')) != null ? (tmp$.addEventListener('click', main$lambda$lambda(todoList)), Unit) : null;
    (tmp$_0 = document.querySelector('#todo_clear_button')) != null ? (tmp$_0.addEventListener('click', main$lambda$lambda_0(todoList)), Unit) : null;
    (tmp$_1 = document.querySelector('#done_clear_button')) != null ? (tmp$_1.addEventListener('click', main$lambda$lambda_1(todoList)), Unit) : null;
    return Unit;
  }
  function main() {
    document.addEventListener('DOMContentLoaded', main$lambda);
  }
  function TodoManager(todoUl, doneUl) {
    this.todoUl_0 = todoUl;
    this.doneUl_0 = doneUl;
  }
  function TodoManager$addTodo$lambda(this$TodoManager, closure$li, closure$name) {
    return function (it) {
      this$TodoManager.todoUl_0.removeChild(closure$li);
      this$TodoManager.addDone_61zpoe$(closure$name);
      return Unit;
    };
  }
  TodoManager.prototype.addTodo_61zpoe$ = function (name) {
    if (equals(name, ''))
      return;
    var li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', TodoManager$addTodo$lambda(this, li, name));
    this.todoUl_0.appendChild(li);
  };
  function TodoManager$addDone$lambda(this$TodoManager, closure$li, closure$name) {
    return function (it) {
      this$TodoManager.doneUl_0.removeChild(closure$li);
      this$TodoManager.addTodo_61zpoe$(closure$name);
      return Unit;
    };
  }
  TodoManager.prototype.addDone_61zpoe$ = function (name) {
    if (equals(name, ''))
      return;
    var li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', TodoManager$addDone$lambda(this, li, name));
    this.doneUl_0.appendChild(li);
  };
  TodoManager.prototype.clearTodoList = function () {
    var tmp$;
    while (this.todoUl_0.firstChild != null) {
      if ((tmp$ = this.todoUl_0.firstChild) != null) {
        this.todoUl_0.removeChild(tmp$);
      }
    }
  };
  TodoManager.prototype.clearDoneList = function () {
    var tmp$;
    while (this.doneUl_0.firstChild != null) {
      if ((tmp$ = this.doneUl_0.firstChild) != null) {
        this.doneUl_0.removeChild(tmp$);
      }
    }
  };
  TodoManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoManager',
    interfaces: []
  };
  _.main = main;
  _.TodoManager = TodoManager;
  main();
  Kotlin.defineModule('TodoApp', _);
  return _;
}(typeof TodoApp === 'undefined' ? {} : TodoApp, kotlin);
