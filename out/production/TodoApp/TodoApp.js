if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'TodoApp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'TodoApp'.");
}
var TodoApp = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  function main$lambda$lambda(closure$todoList) {
    return function (it) {
      var tmp$;
      println('click!');
      var input = Kotlin.isType(tmp$ = document.querySelector('#input'), HTMLInputElement) ? tmp$ : throwCCE();
      closure$todoList.addTodo_61zpoe$(input.value);
      input.value = '';
      return Unit;
    };
  }
  function main$lambda(it) {
    var tmp$;
    var todoUl = document.querySelector('#todo_ul');
    var doneUl = document.querySelector('#done_ul');
    var todoList = new TodoManager(ensureNotNull(todoUl), ensureNotNull(doneUl));
    (tmp$ = document.querySelector('#button')) != null ? (tmp$.addEventListener('click', main$lambda$lambda(todoList)), Unit) : null;
    return Unit;
  }
  function main() {
    document.addEventListener('DOMContentLoaded', main$lambda);
  }
  function Task(id, name, isChecked) {
    this.id = id;
    this.name = name;
    this.isChecked = isChecked;
  }
  Task.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Task',
    interfaces: []
  };
  Task.prototype.component1 = function () {
    return this.id;
  };
  Task.prototype.component2 = function () {
    return this.name;
  };
  Task.prototype.component3 = function () {
    return this.isChecked;
  };
  Task.prototype.copy_cqw3wz$ = function (id, name, isChecked) {
    return new Task(id === void 0 ? this.id : id, name === void 0 ? this.name : name, isChecked === void 0 ? this.isChecked : isChecked);
  };
  Task.prototype.toString = function () {
    return 'Task(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', isChecked=' + Kotlin.toString(this.isChecked)) + ')';
  };
  Task.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.isChecked) | 0;
    return result;
  };
  Task.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.isChecked, other.isChecked)))));
  };
  function TodoManager(todoUl, doneUl) {
    this.todoUl_0 = todoUl;
    this.doneUl_0 = doneUl;
  }
  function TodoManager$addTodo$lambda(it) {
    println('click on ' + it);
    return Unit;
  }
  TodoManager.prototype.addTodo_61zpoe$ = function (name) {
    if (equals(name, '')) {
      return;
    }
    var li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', TodoManager$addTodo$lambda);
    this.todoUl_0.appendChild(li);
  };
  TodoManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TodoManager',
    interfaces: []
  };
  _.main = main;
  _.Task = Task;
  _.TodoManager = TodoManager;
  main();
  Kotlin.defineModule('TodoApp', _);
  return _;
}(typeof TodoApp === 'undefined' ? {} : TodoApp, kotlin);
