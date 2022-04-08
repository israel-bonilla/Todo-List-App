import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialState = {
  todos: [
    {
      id: uuid(),
      todo: "Wake up",
      completed: true,
    },
    {
      id: uuid(),
      todo: "First task",
      completed: false,
    },
  ],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos.splice(state.todos.map(todo => todo.id).indexOf(action.payload), 1);
    },
    updateTodo: (state, action) => {
      state.todos[state.todos.map(todo => todo.id).indexOf(action.payload.id)].todo = action.payload.edit;
    },
    setCompleted: (state, action) => {
      state.todos[state.todos.map(todo => todo.id).indexOf(action.payload)].completed = !state.todos[state.todos.map(todo => todo.id).indexOf(action.payload)].completed;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setCompleted } = appSlice.actions;

export const selectTodos = state => state.app.todos;

export default appSlice.reducer;
