import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskAppCh4() {
  const [todos, setTodos] = useImmer(initialTodos);

  function handleAddTodo(title) {
    setTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    setTodos(draft => {
      const todoIndex = draft.findIndex(t => t.id === nextTodo.id);
      if (todoIndex !== -1) {
        draft[todoIndex] = { ...draft[todoIndex], ...nextTodo };
      }
    });
  }

  function handleDeleteTodo(todoId) {
    setTodos(draft => {
      const todoIndex = draft.findIndex(t => t.id === todoId);
      if (todoIndex !== -1) {
        draft.splice(todoIndex, 1);
      }
    });
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
