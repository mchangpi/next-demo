import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: any;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  console.log(todo.id, todo.title, todo.completed);
  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Completed: ${completed} 
  `);
};

/*
Primitive Types: number, boolean, void, undefined, string, symbol, null
Object Types: functions, arrays, classes, objects
*/
