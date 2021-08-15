import React from 'react';
import './App.css';
import Input from './Input';
import Quote from './Quote';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app">
      <h1 className="app__header">Todo List App</h1>
      <Quote />
      <Input />
      <TodoList />
      <div style={{ margin: 100 }}><p>Made by Israel Bonilla</p></div>
    </div>
  );
}

export default App;
