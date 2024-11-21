import { useState } from 'react';
import './App.css';
import Todos from './Componet/Todo';
import AddTodo from './Componet/Addtodo';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
