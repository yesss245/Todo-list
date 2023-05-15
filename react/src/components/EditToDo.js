import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'

function EditTodo() {
  const [todo, setTodo] = useState({
    description: '',
    responsible: '',
    priority: '',
    completed : false
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/todos/${id}`);
      setTodo(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/todos/update/${id}`, todo);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div  className='card d-flex justify-content-center' style={{width:"25rem",marginLeft:"35%"}}>
    <div className='card-body m-2'>
      <h3 className='text-center m-4'>Edit Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="responsible">Responsible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            value={todo.responsible}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority: </label>
          <select
            className="form-control"
            name="priority"
            value={todo.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="completed">Completed : </label>
          <select
            className="form-control"
            name="completed"
            value={todo.completed ? 'True' : 'False'}
            onChange={handleChange}
          >
            <option>True</option>
            <option>False</option>
          </select>
        </div><br/>
        <button type="submit" className="btn btn-success">
          Update Todo
        </button>
      </form>
    </div>
    </div>
  );
}

export default EditTodo;
