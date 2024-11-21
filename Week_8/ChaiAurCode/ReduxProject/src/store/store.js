import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Ensure the key matches the state selector in Todos.js
  },
});
