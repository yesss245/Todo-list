import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const [todo, setTodo] = useState({
    description: '',
    responsible: '',
    priority: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/todos/add', todo);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div  className='card d-flex justify-content-center' style={{width:"25rem",marginLeft:"35%"}}>
      <div className='card-body m-2'>
      <h3 className='text-center m-4'>Add Todo-List</h3>
        <form onSubmit={handleSubmit}>
          <div  className="form-group ">
            <label htmlFor="description">Description: </label>
            <input
            
              type="text"
              className="form-control "
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
          </div><br/>
          <button type="submit" className="btn btn-success">
            Add Todo
          </button>
        </form>
      </div>
    </div>  
  );
}

export default AddTodo;

