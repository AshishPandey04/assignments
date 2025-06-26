/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
    this.todos=[];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
    return this.todos
  }

  update(index, updatedTodo) {
    let n = this.todos.length;
    if(index<n){
       this.todos[index] = updatedTodo;
    }
   
   
  }

  getAll() {
    return this.todos;
  }

  get(index) {
     let n = this.todos.length;
    if(index<n){
       return this.todos[index];
    }
    else{
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;




