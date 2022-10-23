import React from 'react';
import { Fragment, useEffect, useState } from 'react';
import EditBook from '../components/EditBook';

const BookList = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteBook = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {' '}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditBook todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default BookList;
