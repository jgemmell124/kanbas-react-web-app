import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";

  const [errorMessage, setErrorMessage] = useState<any>(null);

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState<any[]>([]);

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo: any) => {
    try {
      await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      console.log('error', error);
      setErrorMessage(error.response?.data?.message);
    }
  };

  const updateTodo = async () => {
    try {
      await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log('error', error);
      setErrorMessage(error.response?.data?.message);
    }
  }


  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  /* const removeTodo = async (todo: any) => { */
  /*   const response = await axios */
  /*     .get(`${API}/${todo.id}/delete`); */
  /*   setTodos(response.data); */
  /* }; */

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        type="number"
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
      <a className="btn btn-primary" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <br />

      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
      <h3>Updating an Item in an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>
      <br />
      <br />

      <textarea value={todo.description} onChange={(e) => setTodo({
          ...todo, description: e.target.value })}/>
      <br />
      <a className="btn btn-primary" href={`${API}/${todo.id}/description/${todo.description}`} >
        Update todo Description
      </a>
      <br />
      <br />

      <input type={'checkbox'} checked={todo.completed} onChange={(e) => setTodo({
          ...todo, completed: e.target.checked })}/>
      <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
        Update todo completed status to {todo.completed ? 'Completed' : 'Not Completed'}
      </a>
      <br />
      <br />

      <h4>Filtering Array Items</h4>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
        <a className="btn btn-primary" href={`${API}/create`}>
          Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>

      <div style={{ width: '50%', marginTop: '8px', marginBottom: '8px'}}>
        <input
          value={todo.id}
          readOnly
        />
        <br />
        <input
          onChange={(e) => setTodo({
            ...todo, title: e.target.value
          })}
          value={todo.title}
          type="text"
        />
        <br />
        <textarea
          value={todo.description}
          onChange={(e) => setTodo({ ...todo,
            description: e.target.value })}
        />
        <br />
        <input
          value={todo.due}
          type="date"
          onChange={(e) => setTodo({
            ...todo, due: e.target.value })}
        />
        <br />
        <label>
          <input
            checked={todo.completed}
            type="checkbox"
            onChange={(e) => setTodo({
              ...todo, completed: e.target.checked })}
          />
          <span> Completed</span>
        </label>

        <button style={{ width: '100%' }} className="btn btn-warning m-1" onClick={postTodo}> Post Todo </button>
        <button style={{ width: '100%' }} className="btn btn-secondary m-1" onClick={updateTodo}> Update Todo </button>
        <button style={{ width: '100%'}} className="btn btn-primary m-1" onClick={createTodo} >
          Create Todo
        </button>
        <button style={{ width: '100%'}} className="btn btn-success m-1" onClick={updateTitle} >
          Update Title
        </button>
        { errorMessage &&
          <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
          </div>
        }
        <ul style={{ width: '100%'}} className="list-group">
          {todos.map((todo: any) => (
            <li 
              key={todo.id}
              className="list-group-item d-flex justify-content-between"
            >
              <input
                checked={todo.completed}
                type="checkbox"
                readOnly
              />
              <p>
                {todo.title}
              </p>
              <p>{todo.description}</p>
              <p>{todo.due}</p>
              <div>
                <button className="btn btn-danger m-1" onClick={() => deleteTodo(todo)} >
                  Delete
                </button>
                <button className="btn btn-warning m-1" onClick={() => fetchTodoById(todo.id)} >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkingWithArrays;
