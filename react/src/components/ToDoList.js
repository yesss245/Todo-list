import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get('http://localhost:5000/todos/')
      .then(res => setTodos(res.data))
      .catch(err => console.log(`Error: ${err}`));
  };

  const deleteTodo = id => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(`Error: ${err}`));

    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div  className='m-5'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td>{todo.description}</td>
              <td>{todo.responsible}</td>
              <td>{todo.priority}</td>
              <td>{todo.completed ? 'Completed' : 'Pending'}</td>
              <td>
                <Link to={`/edit/${todo._id}`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo._id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </tfoot>
      </table>
      
    </div>
  );
};

export default TodoList;
